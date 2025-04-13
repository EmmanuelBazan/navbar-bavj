import { 
    SkillsContainer, 
    FirstBox, 
    TitleCard, 
    LineBox, 
    Title,
    LongCard,
    ShortCard,
    SpaceColumn,
    SpaceRow,
    H1Text,
    H2Text,
    H3Text,
} from "./skills.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Skills = () => {

    const { height } = useWindowDimensions()
    
    return (
        <>
            <SkillsContainer _currentHeight={height}>
                <FirstBox>
                    <TitleCard>
                        <Title>Profesional Experience</Title>
                    </TitleCard>
                    <SpaceRow/>
                    <LineBox>
                        <LongCard>
                            <H1Text>Alten |</H1Text>
                            <H2Text>Mobile developer</H2Text>
                        </LongCard>
                        <SpaceColumn/>
                        <ShortCard>
                            <H3Text>2024 - actually</H3Text>
                        </ShortCard>
                    </LineBox>
                    <SpaceRow/>
                    <LineBox>
                        <ShortCard>
                            <H3Text>2023 - 2024</H3Text>
                        </ShortCard>
                        <SpaceColumn/>
                        <LongCard>
                            <H1Text>Kokonut |</H1Text>
                            <H2Text>Hybrid mobile developer</H2Text>
                        </LongCard>
                    </LineBox>
                    <SpaceRow/>
                    <LineBox>
                        <LongCard>
                            <H1Text>Niku |</H1Text>
                            <H2Text>React Js/Native developer</H2Text>
                        </LongCard>
                        <SpaceColumn/>
                        <ShortCard>
                            <H3Text>2022 - 2023</H3Text>
                        </ShortCard>
                    </LineBox>
                    <SpaceRow/>
                    <LineBox>
                        <ShortCard>
                            <H3Text>2021 - 2021</H3Text>
                        </ShortCard>
                        <SpaceColumn/>
                        <LongCard>
                            <H1Text>FRI |</H1Text>
                            <H2Text>Intern</H2Text>
                        </LongCard>
                    </LineBox>
                </FirstBox>
            </SkillsContainer>
        </>
    )
}

export default Skills