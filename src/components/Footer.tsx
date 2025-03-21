import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import React from "react";

export function Footer() {
    return (
        <footer className="border-t border-gray-200">
            <Container>
                <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
                    <div>
                        <div className="flex items-center text-gray-300">
                            <Logo className="h-10 w-10 flex-none stroke-white" />
                            <div className="ml-4">
                                <p className="text-base font-semibold">Jon George</p>
                                <p className="mt-1 text-sm">Software Engineer & Entrepreneur</p>
                            </div>
                        </div>

                    </div>
                    <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">

                            <nav className="flex">
                                <NavLinks />
                            </nav>

                    </div>
                </div>
                <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">

                    <p className="mt-6 text-sm text-gray-500 md:mt-0">
                        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
}
