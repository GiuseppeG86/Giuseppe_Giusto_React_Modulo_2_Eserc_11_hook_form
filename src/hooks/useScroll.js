import { useEffect, useState, useRef } from "react";

function useScroll () {

    const [scrollY, setScrollY] = useState();
    const ref = useRef();

    const onScroll = () => setScrollY(window.scrollY);

    useEffect(()=>{
        window.addEventListener('scroll', onScroll);
    }, []);

    return [ref, scrollY]

}

export default useScroll