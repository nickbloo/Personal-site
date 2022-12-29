import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, height }) => {
    return (
        <div className="inline-flex items-center justify-center h-screen bg-green-500 text-white" style={{ height: height }}>
            {children}
        </div>
    )
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    function updateIndex(newIndex) {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex);
    }

    const handlers = useSwipeable({
        onSwipedUp: () => updateIndex(activeIndex + 1),
        onSwipedDown: () => updateIndex(activeIndex - 1),
    })

    return (
        <div className="overflow-hidden" id="background" {...handlers}>
            <div className="whitespace-nowrap transition-transform duration-300" style={{ transform: `translateY(-${activeIndex * 25}%)` }}>
                {React.Children.map(children, (child, idx) => {
                    return React.cloneElement(child, { height: "100%" })
                })}
            </div>
            <div className="flex z-1 flex-col items-end fixed inset-y-1/2 right-0 pr-8">
                {React.Children.map(children, (child, idx) => {
                    return (
                        <button className={`${idx === activeIndex ? "rounded-full bg-green-500" : "rounded-full"}`}
                        onClick={() => {
                            updateIndex(idx);
                        }}>
                            {idx + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    )
};

export default Carousel;