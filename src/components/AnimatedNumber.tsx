'use client'

import {
    motion,
    useAnimation,
    useInView,
    useSpring,
    useTransform
} from "framer-motion";
import {useEffect, useRef, useState} from "react";

type AnimatedNumberProps = {
    value: number
}

export default function AnimatedNumber({value}:AnimatedNumberProps) {
    let [newValue, setNewValue] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});

    let spring = useSpring(newValue, { mass: 0.8, stiffness: 125, damping: 50 });
    let display = useTransform(spring, (current)=>
        Math.round(current).toLocaleString()
    )

    useEffect(() => {
        if(inView) {
            setNewValue(900);
            spring.set(newValue);
        }
    }, [spring, value, inView, newValue]);

    return (
        <motion.span ref={ref}>
            {display}
        </motion.span>
    );
}