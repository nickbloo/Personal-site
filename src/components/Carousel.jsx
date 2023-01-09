import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import * as Scroll from 'react-scroll';
import Navbar from './Navbar';

export const CarouselItem = ({ children, height }) => {
    return (
        <div className="inline-flex items-center justify-center h-screen text-white" style={{ height: height }}>
            {children}
        </div>
    )
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollDistance, setScrollDistance] = useState(0);
    const canScroll = useRef(true);
    const carouselRef = useRef({});
    const carouselItemsRef = useRef({});

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
    });

    function handleScroll (event) {
        if (!canScroll.current) return;
        canScroll.current = false;
        if (event.deltaY > 0) {
            updateIndex(activeIndex + 1)
        } else {
            updateIndex(activeIndex - 1)
        } 
        // setActiveIndex((prev) => {
        //     const newIndex = prev + (event.deltaY/100);
        //     return newIndex >= 0 && newIndex < 4 ? newIndex : prev;
        // });
        setTimeout(() => {
            canScroll.current = true;
        }, 1000);
    }

    // useEffect(() => {
    //     addEventListener('wheel', handleScroll);
    //     //Add edge case to prevent scroll at the first or last pages
    //     if (carouselRef.current) {
    //         let yCoor = activeIndex * 489;
    //         console.log(yCoor);
    //         console.log('carouselItemsRef: ', carouselItemsRef.current.scrollHeight/8);
    //         carouselRef.current.scrollTo({
    //             top: yCoor,
    //             behavior: 'smooth'
    //         });
    //     }

    //     return () => {
    //         removeEventListener('wheel', handleScroll);
    //     }
    // }, [activeIndex]);

    return (
        <div className="overflow-hidden h-screen" id="background" {...handlers} ref={carouselRef}>
            
            <Navbar />

        
            <div onWheel={handleScroll} className="flex flex-col items-center justify-center text-white whitespace-nowrap transition-transform duration-300" style={{ transform: `translateY(-${activeIndex * 25}%)` }} ref={carouselItemsRef}>
                {React.Children.map(children, (child, idx) => {
                    return React.cloneElement(child, { height: "100%" })
                })}
            </div>

            <div className="flex z-1 flex-col items-end fixed inset-y-1/2 right-0 pr-8">
                {React.Children.map(children, (child, idx) => {
                    return (
                        <button className={`${idx === activeIndex ? "m-1 rounded-full border-8 border-white" : "m-1 rounded-full border-8 border-violet-600"}`}
                        onClick={() => {
                            updateIndex(idx);
                        }}>
                        </button>
                    );
                })}
            </div>
        </div>
    )
};

export default Carousel;