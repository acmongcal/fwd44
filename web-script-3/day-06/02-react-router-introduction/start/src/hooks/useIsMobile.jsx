import { useEffect, useState } from "react";

const getIsMobile = () => window.innerWidth < 601;


export default function useIsMobile (){
    const [isMobile, setIsMobile] = useState(getIsMobile);

    useEffect(()=>{
        const onSnap = () => {setIsMobile(getIsMobile());};

        window.addEventListener("resize", onSnap);
    },[])

    return isMobile;
}