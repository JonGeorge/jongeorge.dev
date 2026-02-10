import type {ReactNode} from "react";
import type {Metadata} from "next";
import {DM_Sans, JetBrains_Mono, Lora} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";

const lora = Lora({
    variable: "--font-lora",
    subsets: ["latin"],
    display: "swap",
});

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://jg.dev"),

    title: "Jon George",

    description: "Technical leader and product builder. Building SoftwareDB.",

    openGraph: {
        title: 'Jon George',
        description: 'Technical leader and product builder. Building SoftwareDB.',
        url: 'https://jg.dev',
        siteName: 'jg.dev',
        images: [{url: '/1200x630.png', width: 1200, height: 630, alt:'Jon George — Technical leader and product builder. Building SoftwareDB.'}],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Jon George',
        description: 'Technical leader. Building SoftwareDB.',
        creator: '@jongeorgedev',
        images: ["/1200x630.png"],
    },

    alternates: {
        canonical: 'https://jg.dev',
    },

    icons: {
        icon: "/32x32.png",
        apple: "/512x512.png",
    },

    authors: [{ name: 'Jon George'}],

    creator: 'Jon George',

    publisher: 'Jon George',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${lora.variable} ${dmSans.variable} ${jetBrainsMono.variable} font-sans antialiased bg-(--color-bg) text-(--color-text-primary) transition-colors duration-300`}
        >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
