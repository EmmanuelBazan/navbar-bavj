import { AboutMeContainer } from "./AboutMe.elements"

const AboutMe = () => {

    const CURRENT_HEIGTH = window.innerHeight
    return (
        <>
            <AboutMeContainer _currentHeigth={CURRENT_HEIGTH}>
                <text>About me</text>
            </AboutMeContainer>
        </>
    )
}

export default AboutMe