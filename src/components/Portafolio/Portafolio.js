import { PortafolioContainer } from "./portafolio.elements"

const CURRENT_HEIGHT = window.innerHeight

const Portafolio = () => {
    return (
        <>
            <PortafolioContainer _currentHeight={CURRENT_HEIGHT}>
                <text>Portafolio</text>
            </PortafolioContainer>
        </>
    )
}

export default Portafolio