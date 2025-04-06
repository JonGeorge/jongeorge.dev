'use client'

import Link from 'next/link'

export function NavLinks() {
    return [
        ['Home', '/'],
        ['My Approach', '/approach'],
        ['Guiding Principles', '/principles']
    ].map(([label, href], index) => (
        <div key={"nav-link" + index} className="flex">
            <Link
                key={label}
                href={href}
                className=" text-md text-gray-100 text-center group"
            >
                <div className="relative">
                    {label}
                    <span
                        className="absolute -bottom-1 left-0 w-full h-0.25 bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </div>
            </Link>
        </div>
    ))
}
