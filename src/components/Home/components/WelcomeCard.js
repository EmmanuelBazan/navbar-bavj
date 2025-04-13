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
    const URL_GITHUB = "https://github.com/EmmanuelBazan?tab=overview&from=2025-04-01&to=2025-04-13";
    const URL_LINKEDIN = "https://www.linkedin.com/in/emmanuel-bazan-102822233/";
    const URL_INSTAGRAM = "https://www.instagram.com/itsemmanuelbazan/";

    const handleClick = (url) => {
        window.location.href = url;
    };

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
                <GithubIcon onClick={() => {handleClick(URL_GITHUB)}} />
                <LinkedinIcon onClick={() => {handleClick(URL_LINKEDIN)}} />
                <InstagramIcon onClick={() => {handleClick(URL_INSTAGRAM)}} />
            </IconsColumn>
        </WelcomeCardContainer>
    )
}

export default WelcomeCard;