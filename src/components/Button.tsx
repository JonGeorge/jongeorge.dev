import Link from 'next/link'
import clsx from 'clsx'
import { SolidButtonColor, OutlineButtonColor } from '@/types'

const baseButtonStyles = {
    solid: 'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors',
    outline: 'inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors',
} as const

const buttonVariantStyles = {
    solid: {
        cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
        white: 'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70 cursor-pointer',
        gray: 'bg-neutral-600/20 text-gray-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 active:bg-gray-200 dark:active:bg-gray-800 active:text-gray-900/80 dark:active:text-white/80 cursor-pointer',
    },
    outline: {
        gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
    },
} as const

type ButtonProps = (
    | {
        variant?: 'solid'
        color?: SolidButtonColor
    }
    | {
        variant: 'outline'
        color?: OutlineButtonColor
    }
) & (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
    })
)

export function Button({ className, ...props }: ButtonProps) {
    const buttonVariant = props.variant ?? 'solid'
    const buttonColor = props.color ?? 'gray'

    const computedClassName = clsx(
        baseButtonStyles[buttonVariant],
        buttonVariant === 'outline'
            ? buttonVariantStyles.outline[buttonColor as OutlineButtonColor]
            : buttonVariant === 'solid'
                ? buttonVariantStyles.solid[buttonColor as SolidButtonColor]
                : undefined,
        className,
    )

    const isLinkButton = typeof props.href !== 'undefined'
    
    return isLinkButton ? (
        <Link className={computedClassName} {...props} />
    ) : (
        <button className={computedClassName} {...props} />
    )
}
