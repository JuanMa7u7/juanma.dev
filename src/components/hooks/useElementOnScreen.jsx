import { React, useRef, useEffect, useState } from 'react';

const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting)
        }, options);
        if (containerRef.current)
            observer.observe(containerRef.current);

        return () => {
            if (containerRef.current)
                observer.unobserve(containerRef.current);
        }
    }, [containerRef, options]);

    return [containerRef, isVisible]
}

export default useElementOnScreen;