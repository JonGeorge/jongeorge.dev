'use client'

import {
    motion,
    useInView,
    useSpring,
    useTransform
} from "framer-motion";
import {useEffect, useRef, useState} from "react";

type PositiveInteger = number
type DisplayPrefix = string
type DisplaySuffix = string
type NumberDescription = string

interface AnimatedNumberProps {
    targetValue: PositiveInteger
    description: NumberDescription
    prefix?: DisplayPrefix
    suffix?: DisplaySuffix
}

export default function AnimatedNumber({targetValue, description, prefix, suffix}: AnimatedNumberProps) {
    const initialValue = targetValue > 10000 ? targetValue - (targetValue * 0.05) : 0;
    const [currentValue, setCurrentValue] = useState(initialValue);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {once: true});

    const animatedSpring = useSpring(currentValue, {mass: 0.8, stiffness: 125, damping: 50});
    const formattedDisplay = useTransform(animatedSpring, (current) =>
       `${prefix || ""}${Math.round(current).toLocaleString()}${suffix || ""}`
    )

    useEffect(() => {
        if (isInView) {
            setCurrentValue(targetValue);
            animatedSpring.set(currentValue);
        }
    }, [animatedSpring, targetValue, isInView, currentValue]);

    return (
        <div className="flex flex-col mx-auto md:mx-5 my-12">
            <motion.div ref={containerRef} className="mb-4 mx-auto text-6xl">
                {formattedDisplay}
            </motion.div>
            <span className="text-center text-lg mx-4">
                {description}
            </span>
        </div>
    );
}