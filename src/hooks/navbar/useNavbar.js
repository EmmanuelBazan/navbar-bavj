import { useEffect, useState } from "react"

const useNavbar = () => {
    
    const [ Yposition, setYposition ] = useState(0)
    const [ show, setShow ] = useState(true)

    useEffect(() => {

        const updateYposition = () => {
            if(window.pageYOffset > Yposition){
                setShow(false)
            }
            else if(window.pageYOffset < Yposition){
                setShow(true)
            }
            setYposition(window.pageYOffset)
        }

        window.addEventListener('scroll',updateYposition)

        return () => window.removeEventListener('scroll',updateYposition)

    },[])


    return {
        show
    }
}

export default useNavbar