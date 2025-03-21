'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function NavLinks() {
    return [
        ['Home', '/'],
        ['Impact', '/#impact'],
        ['About', '/#about'],
        ['Previous work', '/#previous_work'],
        ['My Role', '/#my_role']
    ].map(([label, href], index) => (
        <div key={"nav-link" + index} className="flex">
        <Link
            key={label}
            href={href}
            className="relative text-md text-gray-100 text-center"
        >
            <motion.div whileHover={{scale: 1.1}} className="relative z-10 px-5">{label}</motion.div>
        </Link>

        {/*<span className={""}>/</span>*/}
    </div>
    ))
}
