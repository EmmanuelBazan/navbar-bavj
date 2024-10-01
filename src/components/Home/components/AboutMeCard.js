import useWindowDimensions from "../../../hooks/useWindowDimensions"
import { AboutMeContainer, SubTitle, Title } from "../style/AboutMeCard.elements"

const AboutMeCard = () => {
    const { height } = useWindowDimensions()
    return(
        <AboutMeContainer onClick={() => {
            window.scrollTo({
                top: height,
                behavior: "smooth"
            })
        }} >
            <SubTitle>
                A little 
            </SubTitle>
            <Title>
                about me
            </Title>
        </AboutMeContainer>
    )
}

export default AboutMeCard;