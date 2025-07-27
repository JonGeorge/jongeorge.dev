import React from "react";
import { CardTitle, CardDescription, IconProps } from '@/types';

interface CardProps {
    title: CardTitle
    text: CardDescription
    icon: React.ComponentType<IconProps>
}

export function Card({title, text, icon: IconComponent}: CardProps) {
    return (
        <div className="flex flex-col lg:flex-1/4 md:flex-4/12 flex-12/12 border-0 mb-4 px-4 w-1/3">
            <IconComponent className="w-[27px]" fill="darkgray"/>
            <h2 className="font-bold mt-3 mb-6">{title}</h2>
            <p className="text-lg">{text}</p>
        </div>
    )
}