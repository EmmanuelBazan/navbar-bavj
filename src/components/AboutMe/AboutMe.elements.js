import styled from 'styled-components'

export const AboutMeContainer = styled.div`
    background-color: darkgreen;
    width: 100%;
    height: ${({_currentHeigth = 100}) => _currentHeigth}px;
`