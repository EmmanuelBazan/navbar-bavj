import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    background-color: #0D0D0D;
    height: ${({_currentHeigth}) => _currentHeigth}px;
    width: "100%";
    padding-top: 50px;
    justify-content: start;
    align-items: center;
`

export const TextPresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
    max-width: 400px;
    margin: 20px;
`

export const PresentationText = styled.text`
    color: #F2F2F0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-size: 2rem;

    @media screen and (max-width: 960px){
        font-size: 1.8rem
    }
`

export const NameText = styled.text`
    color: #F2F2F0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 5rem;

    @media screen and (max-width: 960px){
        font-size: 3.5rem;
    }
`