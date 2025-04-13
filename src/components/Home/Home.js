import { 
    HomeContainer, 
    FirstColumn, 
    SecondColumn, 
    ExpirienceContainer,
} from "./Home.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import WelcomeCard from "./components/WelcomeCard"
import ExpirienceCard from "./components/ExperienceCard"
import ProjectsCard from "./components/ProjectsCard"
import ContactCard from "./components/ContactCard"
import AboutMeCard from "./components/AboutMeCard"

const Home = () => {
    const { height } = useWindowDimensions()
    return (
        <HomeContainer _currentHeigth={height}>
            <FirstColumn _currentHeigth={height}>
                <WelcomeCard/>
                <ExpirienceContainer>
                    <ExpirienceCard/>
                    <ProjectsCard/>
                </ExpirienceContainer>
            </FirstColumn>
            <SecondColumn _currentHeigth={height}>
                <AboutMeCard/>
                <ContactCard/>
            </SecondColumn>
            {/* <TextPresentationContainer>
                <PresentationText>
                    Hello i'm
                </PresentationText>
                <NameText>
                    Emmanuel Bazan
                </NameText>
                <PresentationText>
                    Web developper
                </PresentationText>
            </TextPresentationContainer> */}
        </HomeContainer>
    )
}

export default Home