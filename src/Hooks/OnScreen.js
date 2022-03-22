import { useEffect, useState,useMemo } from "react";


const useOnscreen = (elRef ,options) => {

    const [isVisible, setVisible] = useState(false);

    const cbf = (entries) => {
        const [entry] = entries;
        setVisible(entry.isIntersecting)
    }


    const memoOptions = useMemo(()=>{
        return options
    },[options])

    useEffect(()=>{
        const observer = new IntersectionObserver(cbf,memoOptions)
        const element = elRef.current;
        if(element){
            observer.observe(element)
        }

        return () => {
            if(element){
                observer.unobserve(element)
            }
        }
    },[elRef,memoOptions])

    return isVisible;
}



export default useOnscreen;