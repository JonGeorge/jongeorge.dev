/**
 * scripts/generate-og-images.mjs
 *
 * Generates Open Graph images for every blog post at build time.
 * Uses Satori (JSX → SVG) + @resvg/resvg-js (SVG → PNG).
 *
 * Usage:
 *   pnpm generate:og          # all posts
 *   pnpm generate:og -- slug  # single post
 *
 * Output: public/images/writing/[slug]/og.png (1200×630)
 *
 * Add to package.json scripts:
 *   "generate:og": "node scripts/generate-og-images.mjs",
 *   "prebuild": "node scripts/copy-writing-images.mjs && node scripts/generate-og-images.mjs"
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "src", "content", "writing");
const PUBLIC_DIR = path.join(ROOT, "public");

const WIDTH = 1200;
const HEIGHT = 630;

// ─── Design Tokens ───────────────────────────────────────────────
const tokens = {
    bg: "#f8f6f2",
    textPrimary: "#2c2a26",
    textMuted: "#6b6860",
    accent: "#a07d3f",
    border: "#e0ddd6",
};

// ─── Font Loading ────────────────────────────────────────────────
// Satori needs raw TTF/OTF font buffers (not WOFF2).
// Download TTF files once from https://fonts.google.com and place in fonts/:
//
//   fonts/
//     Lora-Regular.ttf
//     Lora-Bold.ttf
//     DMSans-Regular.ttf
//     JetBrainsMono-Regular.ttf

const FONTS_DIR = path.join(ROOT, "src", "lib", "fonts");

function loadFont(filename) {
    const filePath = path.join(FONTS_DIR, filename);
    if (!fs.existsSync(filePath)) {
        throw new Error(
            `Font file not found: ${filePath}\n` +
            `Download TTF files from https://fonts.google.com and place them in the fonts/ directory.`
        );
    }
    return fs.readFileSync(filePath);
}

// ─── Template ────────────────────────────────────────────────────
// Satori uses a JSX-like object syntax (not actual JSX).
// See: https://github.com/vercel/satori#jsx

// Multi-tier title sizing for the 1200×630 canvas.
// Stepped down to keep long titles from overflowing.
function getTitleSize(length) {
    if (length <= 25) return 82;
    if (length <= 45) return 64;
    if (length <= 60) return 56;
    if (length <= 80) return 48;
    return 36;
}

function buildTemplate2({ title, category, date }) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const fontSize = getTitleSize(title.length);

    return {
        type: "div",
        props: {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: tokens.bg,
                padding: "64px 96px",
                fontFamily: "DM Sans",
            },
            children: [
                // Category label
                category
                    ? {
                        type: "div",
                        props: {
                            style: {
                                fontFamily: "JetBrains Mono",
                                fontSize: "14px",
                                color: tokens.accent,
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                marginBottom: "24px",
                            },
                            children: category,
                        },
                    }
                    : null,
                // Title — centered
                {
                    type: "div",
                    props: {
                        style: {
                            fontFamily: "Lora",
                            fontSize: `${fontSize}px`,
                            fontWeight: 700,
                            color: tokens.textPrimary,
                            lineHeight: 1.25,
                            letterSpacing: "-0.02em",
                            textAlign: "center",
                            maxWidth: "1050px",
                            overflow: "hidden",
                        },
                        children: title,
                    },
                },
                // Bottom metadata: jg.dev · date
                {
                    type: "div",
                    props: {
                        style: {
                            marginTop: "32px",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        },
                        children: [
                            {
                                type: "div",
                                props: {
                                    style: {
                                        fontFamily: "JetBrains Mono",
                                        fontSize: "16px",
                                        color: tokens.textMuted,
                                    },
                                    children: "jg.dev",
                                },
                            },
                            // Dot separator
                            {
                                type: "div",
                                props: {
                                    style: {
                                        width: "5px",
                                        height: "5px",
                                        borderRadius: "50%",
                                        backgroundColor: tokens.accent,
                                    },
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    style: {
                                        fontFamily: "JetBrains Mono",
                                        fontSize: "16px",
                                        color: tokens.textMuted,
                                    },
                                    children: formattedDate,
                                },
                            },
                        ],
                    },
                },
            ].filter(Boolean),
        },
    };
}

// Draft template: Left aligned with /J/g SVG logo used for experimenting, leaving commented out for reference.
// function buildTemplate({ title, category, date }) {
//     // Format date nicely
//     const formattedDate = new Date(date).toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//     });
//
//     const fontSize = getTitleSize(title.length);
//
//     const logoSvg = fs.readFileSync(path.join(ROOT, "src", "lib", "fonts", "jglogo.svg"), "utf-8");
//     let logoDataUri = `data:image/svg+xml,${encodeURIComponent(logoSvg.replace("currentColor", tokens.textMuted))}`;
//     return {
//         type: "div",
//         props: {
//             style: {
//                 width: "100%",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 backgroundColor: tokens.bg,
//                 padding: "64px 72px",
//                 fontFamily: "DM Sans",
//             },
//             children: [
//                 // Top section: logo + title
//                 {
//                     type: "div",
//                     props: {
//                         style: {
//                             display: "flex",
//                             flexDirection: "column",
//                             gap: "28px",
//                             overflow: "hidden",
//                             flex: 1,
//                         },
//                         children: [
//                             // Logo mark
//                             {
//                                 type: "img",
//                                 props: {
//                                     src: logoDataUri,
//                                     width: 80,
//                                     height: 58,
//                                 },
//                             },
//                             // Title — font size adapts to length, clamps to 3 lines max
//                             {
//                                 type: "div",
//                                 props: {
//                                     style: {
//                                         fontFamily: "Lora",
//                                         fontSize: `${fontSize}px`,
//                                         fontWeight: 700,
//                                         color: tokens.textPrimary,
//                                         lineHeight: 1.25,
//                                         letterSpacing: "-0.02em",
//                                         maxWidth: "950px",
//                                         overflow: "hidden",
//                                     },
//                                     children: title,
//                                 },
//                             },
//                         ],
//                     },
//                 },
//                 // Bottom section: metadata bar
//                 {
//                     type: "div",
//                     props: {
//                         style: {
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             borderTop: `2px solid ${tokens.accent}`,
//                             paddingTop: "24px",
//                         },
//                         children: [
//                             // Left: domain
//                             {
//                                 type: "div",
//                                 props: {
//                                     style: {
//                                         fontFamily: "JetBrains Mono",
//                                         fontSize: "16px",
//                                         color: tokens.textMuted,
//                                         letterSpacing: "0.02em",
//                                     },
//                                     children: "jg.dev",
//                                 },
//                             },
//                             // Right: category + date
//                             {
//                                 type: "div",
//                                 props: {
//                                     style: {
//                                         display: "flex",
//                                         alignItems: "center",
//                                         gap: "24px",
//                                         fontFamily: "JetBrains Mono",
//                                         fontSize: "16px",
//                                         color: tokens.textMuted,
//                                     },
//                                     children: [
//                                         category
//                                             ? {
//                                                 type: "div",
//                                                 props: {
//                                                     style: {
//                                                         color: tokens.accent,
//                                                         textTransform: "uppercase",
//                                                         letterSpacing: "0.08em",
//                                                         fontSize: "14px",
//                                                         fontWeight: 500,
//                                                     },
//                                                     children: category,
//                                                 },
//                                             }
//                                             : null,
//                                         {
//                                             type: "div",
//                                             props: {
//                                                 children: formattedDate,
//                                             },
//                                         },
//                                     ].filter(Boolean),
//                                 },
//                             },
//                         ],
//                     },
//                 },
//             ],
//         },
//     };
// }

// ─── Generation ──────────────────────────────────────────────────

async function generateImage(post, fonts) {
    const template = buildTemplate2(post);

    // SVG
    const svg = await satori(template, {
        width: WIDTH,
        height: HEIGHT,
        fonts,
    });

    // SVG -> PNG
    const resvg = new Resvg(svg, {
        fitTo: { mode: "width", value: WIDTH * 2 },
    });
    const pngData = resvg.render();
    return pngData.asPng();
}

/**
 * Can be run with "pnpm generate:og -- my-new-post-slug" for one post or
 * "pnpm generate:og" to generate all posts.
 *
 * @returns {Promise<void>}
 */
async function main() {
    const targetSlug = process.argv[2];

    console.log("Loading fonts...");
    const fonts = [
        { name: "Lora", data: loadFont("Lora-Regular.ttf"), weight: 400, style: "normal" },
        { name: "Lora", data: loadFont("Lora-Bold.ttf"), weight: 700, style: "normal" },
        { name: "DM Sans", data: loadFont("DMSans-Regular.ttf"), weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: loadFont("JetBrainsMono-Regular.ttf"), weight: 400, style: "normal" },
    ];

    // Read all posts
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

    const posts = files.map((file) => {
        const slug = file.replace(/\.md$/, "");
        const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
        const { data } = matter(raw);
        return {
            slug,
            title: data.title,
            date: data.updated || data.date,
            category: data.category || null,
        };
    });

    const toGenerate = targetSlug
        ? posts.filter((p) => p.slug === targetSlug)
        : posts;

    if (toGenerate.length === 0) {
        console.error(`No post found with slug: ${targetSlug}`);
        process.exit(1);
    }

    console.log(`Generating OG images for ${toGenerate.length} post(s)...\n`);

    for (const post of toGenerate) {
        const outDir = path.join(PUBLIC_DIR, "images", "writing", post.slug);
        const outPath = path.join(outDir, "og.png");

        if (fs.existsSync(outPath) && !targetSlug) {
            console.log(`  ⏭ ${post.slug} (already exists)`);
            continue;
        }

        fs.mkdirSync(outDir, { recursive: true });

        const png = await generateImage(post, fonts);
        fs.writeFileSync(outPath, png);

        console.log(`  ✓ ${post.slug}`);
        console.log(`    "${post.title}"`);
        console.log(`    → ${path.relative(ROOT, outPath)}\n`);
    }

    console.log("Done.");
}

main().catch((err) => {
    console.error("Failed to generate OG images:", err);
    process.exit(1);
});
