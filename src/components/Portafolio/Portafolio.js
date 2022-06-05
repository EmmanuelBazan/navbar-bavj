import { PortafolioContainer } from "./portafolio.elements"
import useWindowDimensions from "../../hooks/useWindowDimensions"

const Portafolio = () => {

    const { height } = useWindowDimensions()

    return (
        <>
            <PortafolioContainer _currentHeight={height}>
                Portafolio
            </PortafolioContainer>
        </>
    )
}

export default Portafolio