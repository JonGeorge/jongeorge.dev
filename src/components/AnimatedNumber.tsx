'use client'

import {
    motion,
    useInView,
    useSpring,
    useTransform
} from "framer-motion";
import {useEffect, useRef, useState} from "react";

type AnimatedNumberProps = {
    value: number,
    message: string,
    prefix?: string,
    postfix?: string
}

export default function AnimatedNumber({value, message, prefix, postfix}: AnimatedNumberProps) {
    const [newValue, setNewValue] = useState(value > 10000? (value - (value * .05)) : 0);
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});

    const spring = useSpring(newValue, {mass: 0.8, stiffness: 125, damping: 50});
    const display = useTransform(spring, (current) =>
       `${prefix ? prefix : ""}${Math.round(current).toLocaleString()}${postfix ? postfix : ""}`
    )

    useEffect(() => {
        if (inView) {
            setNewValue(value);
            spring.set(newValue);
        }
    }, [spring, value, inView, newValue]);

    return (
        <>
            <div className="flex flex-col mx-auto md:mx-5 my-12">
                <motion.div ref={ref} className="mb-4 mx-auto text-6xl">
                    {display}
                </motion.div>
                <span className="text-center text-lg mx-4">
                {message}
                </span>
            </div>

        </>
    );
}