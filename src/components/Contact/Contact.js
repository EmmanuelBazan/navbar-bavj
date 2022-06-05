import { ContactContainer } from "./contact.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Contact = () => {

    const { height } = useWindowDimensions()
    return (
        <>
            <ContactContainer _currentHeight={height}>
                Contact
            </ContactContainer>
        </>
    )
}

export default Contact