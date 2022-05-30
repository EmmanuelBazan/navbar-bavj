import { SkillsContainer } from "./skills.elements"

const CURRENT_HEIGHT = window.innerHeight

const Skills = () => {
    return (
        <>
            <SkillsContainer _currentHeight={CURRENT_HEIGHT}>
                <text>Skills</text>
            </SkillsContainer>
        </>
    )
}

export default Skills