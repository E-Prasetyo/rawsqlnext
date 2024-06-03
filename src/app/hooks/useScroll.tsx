import React, { useEffect, useState } from 'react'

type propsUseScroll = {
    limit: number
}

interface OutputUseScroll {
    scrollY: number,
    isOver: boolean
}

const useScroll = (props:propsUseScroll):OutputUseScroll => {
    const [scrollY, setScrollY] = useState<number>(0);
    const isOver = scrollY > props.limit ? true : false;
    const onScroll = (event:Event):void => {
        setScrollY(window.pageYOffset);
    };

    useEffect(() => {
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);
    
    
    return {
        scrollY,
        isOver
    }
}

export default useScroll