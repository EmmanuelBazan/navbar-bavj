import { 
    HomeContainer, 
    FirstColumn, 
    SecondColumn, 
    WelcomeCard, 
    ProjectsCard, 
    ExpirienceCard, 
    ExpirienceContainer,
    AboutMeCard,
    ContactCard,
} from "./Home.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"

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