import React from "react";

type Props = {
    title: string,
    text: string,
    icon: React.ComponentType<IconProps>
}

interface IconProps {
    className?: string
}

export function Card({...props}: Props) {
    const Icon = props.icon;
    return (
        <>
            <div
                className="flex flex-col lg:flex-1/4 md:flex-4/12 flex-12/12 border-1 rounded-lg p-6 w-1/3 gap-6">
                <Icon className="w-[27px]"/>
                <h2 className="font-bold">{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </>
    )
}