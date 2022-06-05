import { ExperienceContainer } from "./experience.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Experience = () => {

    const { height } = useWindowDimensions()

    return (
        <>
            <ExperienceContainer _currentHeight={height}>
                Experience
            </ExperienceContainer>
        </>
    )
}

export default Experience