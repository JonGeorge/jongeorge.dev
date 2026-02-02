import {Container} from '@/components/Container'
import React from "react";
import Link from "next/link";
import {Logo} from "@/components/Logo";
import { ExternalURL, LinkTarget } from '@/types';

interface FooterLinkProps {
    href: ExternalURL
    target?: LinkTarget
    children: React.ReactNode
}

function FooterLink({href, children, target}: FooterLinkProps) {
    return (
        <Link href={href} className="my-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 w-fit" target={target} rel="noreferrer noopener">{children}</Link>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-neutral-900">
            <Container className="py-12">
                <div
                    className="flex flex-col items-start justify-between gap-y-12 pb-6 md:flex-row ">

                    <div>
                        <Link href="/">
                            <Logo className="h-10 w-10 flex-none stroke-gray-900 dark:stroke-white"/>
                        </Link>

                        <div className="flex flex-col text-gray-600 dark:text-gray-400">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/approach">My Approach</FooterLink>
                            <FooterLink href="/principles">Guiding Principles</FooterLink>
                        </div>
                    </div>

                    <div>
                        <h6 className="mb-1 md:mb-3 text-gray-900 dark:text-gray-100">Projects</h6>
                        <div className="flex flex-col row-start-2 text-gray-600 dark:text-gray-400">
                            <FooterLink href="https://saveaplaylist.com" target="_blank">Save A Spotify Playlist</FooterLink>
                            <FooterLink href="https://devpler.com" target="_blank">Software Engineering Articles</FooterLink>
                            <FooterLink href="https://explodex.ai" target="_blank">Ordnance Detection and Identification</FooterLink>
                        </div>
                    </div>

                    <div>
                        <h6 className="mb-1 md:mb-3 text-gray-900 dark:text-gray-100">Companies</h6>
                        <div className="flex flex-col text-gray-600 dark:text-gray-400">
                            <p className="my-2">UX Applied</p>
                            <FooterLink href="https://softwaredb.com" target="_blank">SoftwareDB</FooterLink>
                            <p className="my-2">Bookrim</p>
                            <p className="my-2">ØFFx</p>

                            {/*<FooterLink href="#">UX Applied</FooterLink>*/}
                            {/*<FooterLink href="#">SoftwareDB</FooterLink>*/}
                            {/*<FooterLink href="#">Handcrafted</FooterLink>*/}
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center border-gray-200 pt-8 pb-12 md:pt-6 md:justify-between md:flex-row-reverse">

                    <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 md:mt-0 ">
                        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
                    </p>

                </div>
            </Container>
        </footer>
    )
}
