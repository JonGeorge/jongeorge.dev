import clsx from 'clsx'
import React from "react";
import { ResponsiveContainer } from '@/types'

export function Container({
    className,
    ...containerProps
}: ResponsiveContainer) {
    const containerClassName = clsx(
        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-24', 
        className
    )
    
    return (
        <div
            className={containerClassName}
            {...containerProps}
        />
    )
}
