import styled from 'styled-components'

export const SkillsContainer = styled.div`
    background-color: deeppink;
    width: 100%;
    height: ${({_currentHeight}) => _currentHeight}px;
    display: flex;
    flex-direction: column;
`

export const TitleContainer = styled.div`
    background-color: red;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
`

export const TitleStyle = styled.div`
    color: #BF8136;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 300;
`

export const ListContainer = styled.div`
    background-color: green;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    padding: 5px;
    flex-wrap: wrap;
`