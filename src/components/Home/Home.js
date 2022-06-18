import { HomeContainer, NameText, PresentationText, TextPresentationContainer } from "./Home.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Home = () => {

    const { height } = useWindowDimensions()
    return (
        <HomeContainer _currentHeigth={height}>
            <TextPresentationContainer>
                <PresentationText>
                    Hello i'm
                </PresentationText>
                <NameText>
                    Emmanuel Bazan
                </NameText>
                <PresentationText>
                    Web developper
                </PresentationText>
            </TextPresentationContainer>
        </HomeContainer>
    )
}

export default Home