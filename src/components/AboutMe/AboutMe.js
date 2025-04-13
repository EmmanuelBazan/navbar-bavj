import { 
    AboutMeContainer, 
    BtnCv, 
    DescriptionContainer, 
    DescriptionText, 
    PhotoContainer, 
    Title,
    Photo
} from "./AboutMe.elements"
import useWindowDimensions from '../../hooks/useWindowDimensions'

const AboutMe = () => {

    const { height } = useWindowDimensions()

    return (
        <>
            <AboutMeContainer _currentHeigth={height}>
                <DescriptionContainer>
                    <Title>About me</Title>
                    <DescriptionText>
                    Hi! I'm an app developer who enjoys building things that work well and make people's lives easier.
                    I specialize in mobile development and love bringing ideas to life through code. I focus on building interfaces that do what they’re supposed to: fast, stable, and with a solid user experience.
                    I’m always eager to learn new things, improve my skills, and work on projects where I can solve real-world problems. I'm naturally curious and always looking for ways to do things a little better than the day before.
                    Right now, I'm focused on growing as a developer and contributing my experience to projects where code can make a real difference.
                    </DescriptionText>
                    <BtnCv>download CV</BtnCv>
                </DescriptionContainer>
                {/* <PhotoContainer>
                    <Photo></Photo>
                </PhotoContainer> */}
            </AboutMeContainer>
        </>
    )
}

export default AboutMe