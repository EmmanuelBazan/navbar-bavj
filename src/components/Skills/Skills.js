import { SkillsContainer } from "./skills.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Skills = () => {

    const { height } = useWindowDimensions()
    
    return (
        <>
            <SkillsContainer _currentHeight={height}>
                Skills
            </SkillsContainer>
        </>
    )
}

export default Skills