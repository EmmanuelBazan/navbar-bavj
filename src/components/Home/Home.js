import { HomeContainer } from "./Home.elements"

const CURRENT_HEIGTH = window.innerHeight

const Home = () => {
    return (
        <>
            <HomeContainer _currentHeigth={CURRENT_HEIGTH}>
                <text>Home</text>
            </HomeContainer>
        </>
    )
}

export default Home