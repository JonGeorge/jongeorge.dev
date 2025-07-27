'use client'

import Link from 'next/link'
import {
    Popover,
    PopoverButton,
    PopoverBackdrop,
    PopoverPanel,
} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'

import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'
import React, {useEffect, useState} from "react";
import { SVGComponentProps } from '@/types';

function MenuIcon(props: SVGComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" {...props}>
            <path
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
        </svg>
    )
}

function XIcon(props: SVGComponentProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white" {...props}>
            <path
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
        </svg>
    )
}


function LinkedInIcon(props: SVGComponentProps) {
    return (
        <svg viewBox="0 0 480 480" fill="white" aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
    )
}

function GitHubIcon(props: SVGComponentProps) {
    return (
        <svg viewBox="0 0 480 480" fill="white" aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/>
        </svg>
    )
}

function MobileNavLink(
    props: Omit<
        React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
        'as' | 'className'
    >,
) {
    return (
        <motion.div whileHover={{fontWeight: "bold"}}>
            <PopoverButton
                as={Link}
                className="block text-base/7 tracking-tight text-gray-300 w-fit"
                {...props}
            />
        </motion.div>
    )
}

export function Header() {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${scrolled ? "bg-neutral-950/90 py-2" : "bg-transparent py-4"}`}>
            <nav>
                <Container className="relative z-50 flex justify-between">

                    <div className="relative z-20 flex md:order-2 items-center gap-16 pt-4">
                        <Link href="/" aria-label="Home">
                            <Logo className="w-13"/>
                        </Link>
                    </div>

                    <div className="flex md:order-1 items-center">
                        <Popover className="">
                            {({open}) => (
                                <>
                                    <PopoverButton
                                        className="relative z-20 -m-2 inline-flex items-center rounded-lg stroke-gray-200 p-2 focus:not-data-focus:outline-hidden active:stroke-gray-400 cursor-pointer"
                                        aria-label="Toggle site navigation">

                                        {
                                            ({open}) =>
                                                open ?
                                                    <motion.div initial={{rotate: 90}}
                                                                animate={{rotate: open ? 180 : 90}}
                                                                transition={{duration: 0.3}}>
                                                        <XIcon className="h-6 w-6"/>
                                                    </motion.div> :
                                                    <motion.div initial={{rotate: 0}} animate={{rotate: open ? 90 : 0}}
                                                                transition={{duration: 0.3}}>
                                                        <MenuIcon className="h-6 w-6"/>
                                                    </motion.div>
                                        }
                                    </PopoverButton>

                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <>
                                                <PopoverBackdrop
                                                    static
                                                    as={motion.div}
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    exit={{opacity: 0}}
                                                    className="fixed inset-0 z-0 bg-neutral-950/50 backdrop-blur-xs"
                                                />
                                                <PopoverPanel
                                                    static
                                                    as={motion.div}
                                                    initial={{opacity: 0, y: -32}}
                                                    animate={{opacity: 1, y: 0}}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -32,
                                                        transition: {duration: 0.2},
                                                    }}
                                                    className="absolute top-15 inset-x-0 z-0 origin-top rounded-b-2xl bg-neutral-950/90 px-6 pt-10 pb-6 shadow-2xl shadow-gray-900/20"
                                                >
                                                    <Container className="mb-7">
                                                        <div className="space-y-4 w-fit">
                                                            {[
                                                                {menuName: "Home", href: "/"},
                                                                {menuName: "My Approach", href: "/approach"},
                                                                {menuName: "Guiding Principles", href: "/principles"}
                                                            ].map((menuItem, index) => (
                                                                <motion.div
                                                                    key={menuItem.href}
                                                                    initial={{opacity: 0, y: -10}}
                                                                    animate={{opacity: 1, y: 0}}
                                                                    transition={{duration: 0.3, delay: index * 0.2}}
                                                                >
                                                                    <MobileNavLink
                                                                        href={menuItem.href}>{menuItem.menuName}</MobileNavLink>
                                                                </motion.div>
                                                            ))}
                                                        </div>

                                                        <div className="mt-8 flex md:hidden gap-4">
                                                            <motion.div
                                                                initial={{opacity:0,  x: -10}}
                                                                animate={{opacity:1, x: 0}}
                                                                transition={{duration: 0.2, delay: 4 * 0.2}}>
                                                                <motion.div
                                                                    whileHover={{rotate: 5, scale: 1.2}}
                                                                    transition={{
                                                                        type: "spring",
                                                                        stiffness: 750,
                                                                        duration: 3,
                                                                        delay: 0.1
                                                                    }}>
                                                                    <Link
                                                                        href="https://www.linkedin.com/in/jon-georgex/"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer">
                                                                        <LinkedInIcon
                                                                            className="h-7 w-7"/>
                                                                    </Link>
                                                                </motion.div>
                                                            </motion.div>

                                                            <motion.div
                                                                initial={{opacity:0, x: -50}}
                                                                animate={{ opacity:1, x: 0}}
                                                                transition={{duration: 0.2, delay: 5 * 0.2}}>
                                                                <motion.div
                                                                    whileHover={{rotate: 5, scale: 1.2}}
                                                                    transition={{
                                                                        type: "spring",
                                                                        stiffness: 750,
                                                                        duration: 3,
                                                                        delay: 0.1
                                                                    }}>
                                                                    <Link
                                                                        href="https://github.com/JonGeorge"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer">
                                                                        <GitHubIcon
                                                                            className="h-7 w-7"/>
                                                                    </Link>
                                                                </motion.div>
                                                            </motion.div>
                                                        </div>
                                                    </Container>
                                                </PopoverPanel>
                                            </>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </Popover>
                    </div>


                    <div className="hidden md:flex order-3 items-center z-20">
                        <div className="flex gap-3">

                            <motion.div
                                whileHover={{rotate: 5, scale: 1.2}}
                                transition={{
                                    type: "spring",
                                    stiffness: 750,
                                    duration: 3,
                                    delay: 0.1
                                }}
                            >
                                <Link
                                    href="https://www.linkedin.com/in/jon-georgex/"
                                    target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon className="h-7 w-7"/>
                                </Link>
                            </motion.div>


                            <motion.div
                                whileHover={{rotate: 5, scale: 1.2}}
                                transition={{
                                    type: "spring",
                                    stiffness: 750,
                                    duration: 3,
                                    delay: 0.1
                                }}>
                                <Link href="https://github.com/JonGeorge"
                                      target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className="h-7 w-7"/>
                                </Link>
                            </motion.div>
                        </div>
                    </div>


                </Container>
            </nav>
        </header>
    )
}
