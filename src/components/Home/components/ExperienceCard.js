import { 
    ExpirienceCardContainer, 
    SubTitle, 
    Title, 
    BookIcon, 
    IconContainer 
} from "../style/ExpirienceCard.elements";


const ExpirienceCard = () => {
    return(
        <ExpirienceCardContainer>
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