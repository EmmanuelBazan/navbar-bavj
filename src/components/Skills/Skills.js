import { ListContainer, SkillsContainer, TitleContainer, TitleStyle } from "./skills.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import CardSkills from "./CardSkills"

const SKILLS_LIST = [
    {
        name: "React Native",
        level: 4,
        img: ""
    },
    {
        name: "React Native",
        level: 4,
        img: ""
    },
    {
        name: "React Native",
        level: 4,
        img: ""
    },
    {
        name: "React Native",
        level: 4,
        img: ""
    },
    {
        name: "React Native",
        level: 4,
        img: ""
    },
    {
        name: "React Native",
        level: 4,
        img: ""
    },
    {
        name: "React Native",
        level: 4,
        img: ""
    },
    {
        name: "React Native",
        level: 4,
        img: ""
    },
    {
        name: "React Native",
        level: 4,
        img: ""
    },
]

const Skills = () => {

    const { height } = useWindowDimensions()
    
    return (
        <>
            <SkillsContainer _currentHeight={height}>
                <TitleContainer>
                    <TitleStyle>Skills</TitleStyle>
                </TitleContainer>
                <ListContainer>
                    {
                        SKILLS_LIST.map((item) => {
                            return (
                                <CardSkills/>
                            )
                        })
                    }
                </ListContainer>
            </SkillsContainer>
        </>
    )
}

export default Skills