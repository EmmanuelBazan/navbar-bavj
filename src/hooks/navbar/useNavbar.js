import { useEffect, useRef, useState } from "react"

const useNavbar = () => {
    
    const [ show, setShow ] = useState(true)

    const Yposition = useRef(0)

    useEffect(() => {

        const updateYposition = () => {
            if(window.pageYOffset > Yposition.current){
                setShow(false)
                Yposition.current = window.pageYOffset
            }
            else if(window.pageYOffset < Yposition.current){
                setShow(true)
                Yposition.current = window.pageYOffset
            }
            
        }

        window.addEventListener('scroll',updateYposition)

        return () => window.removeEventListener('scroll',updateYposition)

    },[])


    return {
        show
    }
}

export default useNavbar