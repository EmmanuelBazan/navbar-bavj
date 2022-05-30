import { ContactContainer } from "./contact.elements"

const CURRENT_HEIGHT = window.innerHeight

const Contact = () => {
    return (
        <>
            <ContactContainer _currentHeight={CURRENT_HEIGHT}>
                <text>Contact</text>
            </ContactContainer>
        </>
    )
}

export default Contact