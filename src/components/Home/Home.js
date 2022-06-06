import { HomeContainer } from "./Home.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Home = () => {

    const { height } = useWindowDimensions()
    return (
        <>
            <HomeContainer _currentHeigth={height}>
                Home
            </HomeContainer>
        </>
    )
}

export default Home