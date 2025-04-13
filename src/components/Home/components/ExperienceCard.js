import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { 
    ExpirienceCardContainer, 
    SubTitle, 
    Title, 
    BookIcon, 
    IconContainer 
} from "../style/ExpirienceCard.elements";


const ExpirienceCard = () => {
    const { height } = useWindowDimensions()
    return(
        <ExpirienceCardContainer onClick={() => {
            window.scrollTo({
                top: height * 2,
                behavior: "smooth"
            })
        }} >
            <IconContainer>
                <BookIcon/>
            </IconContainer>
            <SubTitle>
                More than 3 years of 
            </SubTitle>
            <Title>
                experience
            </Title>
        </ExpirienceCardContainer>
    );
}

export default ExpirienceCard;