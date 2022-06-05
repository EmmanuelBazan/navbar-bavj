import { AboutMeContainer } from "./AboutMe.elements"
import useWindowDimensions from '../../hooks/useWindowDimensions'

const AboutMe = () => {

    const { height } = useWindowDimensions()

    return (
        <>
            <AboutMeContainer _currentHeigth={height}>
                About me
            </AboutMeContainer>
        </>
    )
}

export default AboutMe