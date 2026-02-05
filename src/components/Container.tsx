import clsx from 'clsx'
import React from "react";

export function Container({
    className,
    ...containerProps
}: React.ComponentPropsWithoutRef<'div'>) {
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
