declare module '*.md' {
    const attributes: Record<string, string>;
    const toc: { level: string, content: string }[];
    const html: string;
    const raw: string

    export { attributes, toc, html};
}