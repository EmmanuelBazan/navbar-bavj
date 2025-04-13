import { GearIcon, IconContainer, ProjectsCardContainer, SubTitle, Title } from "../style/ProjectsCard.elements";


const ProjectsCard = () => {
    return(
        <ProjectsCardContainer>
            <SubTitle>
                Check out my 
            </SubTitle>
            <Title>
                projects
            </Title>
            <IconContainer>
                <GearIcon/>
            </IconContainer>
        </ProjectsCardContainer>
    );
}

export default ProjectsCard;