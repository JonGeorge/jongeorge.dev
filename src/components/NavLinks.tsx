'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function NavLinks() {
    return [
        ['About', '/#about'],
        ['Accomplishments', '/#accomplishments'],
        ['My Role', '/#my_role']
    ].map(([label, href], index) => (
        <motion.div key={"nav-link" + index} className="flex  ">
        <Link
            key={label}
            href={href}
            className="relative -mx-3 -my-2 px-3 py-2 text-md text-gray-100"
        >
            <motion.div whileHover={{scale: 1.1}} className="relative z-10 px-5">{label}</motion.div>
        </Link>

        <span className={"pl-5 pr-5"}>/</span>
    </motion.div>
    ))
}
