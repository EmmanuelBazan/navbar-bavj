import { useEffect, useState } from "react"

const useScroll = () => {

    const [ Yscroll, setYscroll ] = useState(window.pageYOffset)

    useEffect(() => {
        const userScrolling = () => {
            console.log("THE USER IS SCROLLING ------------> ",window.pageYOffset)
            setYscroll(window.pageYOffset)
        }

        window.addEventListener('scroll',userScrolling)

        return () => window.removeEventListener('scroll',userScrolling)
    },[])

    return {
        Yscroll
    }
}

export default useScroll