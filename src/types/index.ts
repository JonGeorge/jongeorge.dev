// Common UI Types
export type CSSClassName = string
export type SVGFillColor = string

// Text and Content Types
export type CardTitle = string
export type CardDescription = string
export type NumberDescription = string

// Numeric Types
export type PositiveInteger = number

// Display Types
export type DisplayPrefix = string
export type DisplaySuffix = string

// Navigation Types
export type ExternalURL = string
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top'

// Component Types
export type ResponsiveContainer = React.ComponentPropsWithoutRef<'div'>
export type SVGComponentProps = React.ComponentPropsWithoutRef<'svg'>

// Icon Types
export interface IconProps {
    className?: CSSClassName
    fill?: SVGFillColor
}

// Button Types
export type SolidButtonColor = 'cyan' | 'white' | 'gray'
export type OutlineButtonColor = 'gray'