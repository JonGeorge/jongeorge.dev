import {Container} from '@/components/Container'
import React from "react";
import Link from "next/link";
import {Logo} from "@/components/Logo";

interface FooterLinkProps {
    href: string
    target?: string
    children: React.ReactNode
}

function FooterLink({href, children, target}: FooterLinkProps) {
    return (
        <Link href={href} target={target} className="my-2 hover:text-gray-100 w-fit">{children}</Link>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-neutral-900">
            <Container className="py-12">
                <div
                    className="flex flex-col items-start justify-between gap-y-12 pb-6 md:flex-row ">

                    <div>
                        <Link href="/">
                            <Logo className="h-10 w-10 flex-none stroke-white"/>
                        </Link>

                        <div className="flex flex-col text-gray-400">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/approach">My Approach</FooterLink>
                            <FooterLink href="/principles">Guiding Principles</FooterLink>
                        </div>
                    </div>

                    <div>
                        <h6 className="mb-1 md:mb-3">Projects</h6>
                        <div className="flex flex-col row-start-2 text-gray-400">
                            <FooterLink href="https://devpler.com" target="_blank">Cybersecurity Articles</FooterLink>
                            <FooterLink href="https://saveaplaylist.com" target="_blank">Save A Spotify
                                Playlist</FooterLink>
                            <FooterLink href="https://builderiai.com" target="_blank">Construction Software</FooterLink>
                        </div>
                    </div>

                    <div>
                        <h6 className="mb-1 md:mb-3">Companies</h6>
                        <div className="flex flex-col text-gray-400">
                            <p className="my-2">UX Applied</p>
                            <p className="my-2">SoftwareDB</p>
                            <p className="my-2">Handcrafted</p>

                            {/*<FooterLink href="#">UX Applied</FooterLink>*/}
                            {/*<FooterLink href="#">SoftwareDB</FooterLink>*/}
                            {/*<FooterLink href="#">Handcrafted</FooterLink>*/}
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center border-gray-200 pt-8 pb-12 md:pt-6 md:justify-between md:flex-row-reverse">

                    <p className="mt-6 text-sm text-gray-400 md:mt-0 ">
                        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
                    </p>

                </div>
            </Container>
        </footer>
    )
}
