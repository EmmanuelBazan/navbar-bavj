import {
    WelcomeCardContainer,
    GithubIcon,
    IconsColumn,
    InstagramIcon,
    LinkedinIcon,
    MyNameContainer,
    NameText,
    PresentationText
} from "../style/WelcomeCard.elements"

const WelcomeCard = () => {
    return(
        <WelcomeCardContainer>
            <MyNameContainer>
                <PresentationText>
                    Hello i'm
                </PresentationText>
                <NameText>
                    Emmanuel Bazan
                </NameText>
                <PresentationText>
                    Mobile developer and biker
                </PresentationText>
            </MyNameContainer>
            <IconsColumn>
                <GithubIcon/>
                <LinkedinIcon/>
                <InstagramIcon/>
            </IconsColumn>
        </WelcomeCardContainer>
    )
}

export default WelcomeCard;