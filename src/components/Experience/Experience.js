import { ExperienceContainer } from "./experience.elements"

const CURRENT_HEIGHT = window.innerHeight

const Experience = () => {
    return (
        <>
            <ExperienceContainer _currentHeight={CURRENT_HEIGHT}>
                <text>Experience</text>
            </ExperienceContainer>
        </>
    )
}

export default Experience