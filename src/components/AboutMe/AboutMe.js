import { 
    AboutMeContainer, 
    BtnCv, 
    DescriptionContainer, 
    DescriptionText, 
    PhotoContainer, 
    Title,
    Photo} from "./AboutMe.elements"
import useWindowDimensions from '../../hooks/useWindowDimensions'

const AboutMe = () => {

    const { height } = useWindowDimensions()

    return (
        <>
            <AboutMeContainer _currentHeigth={height}>
                <PhotoContainer>
                    <Photo></Photo>
                </PhotoContainer>
                <DescriptionContainer>
                    <Title>About me</Title>
                    <DescriptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</DescriptionText>
                    <BtnCv>download CV</BtnCv>
                </DescriptionContainer>
            </AboutMeContainer>
        </>
    )
}

export default AboutMe