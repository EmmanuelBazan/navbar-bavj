import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #0d0d0d;
    height: ${({_currentHeigth}) => _currentHeigth}px;
    width: 100%;
    justify-content: start;
    align-items: center;
`

export const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: ${({_currentHeigth}) => _currentHeigth}px;
    width: 66%;
    padding: 10px;

    @media screen and (max-width: 960px){
        width: 50%;
    }
`

export const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: ${({_currentHeigth}) => _currentHeigth}px;
    width: 33%;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    @media screen and (max-width: 960px){
        width: 50%;
    }
`

export const WelcomeCard = styled.div`
    display: flex;
    background-color: #f1f1f1;
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
    border-radius: 15px;
`

export const ExpirienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;

    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`

export const ExpirienceCard = styled.div`
    display: flex;
    background-color: #f1f1f1;
    width: 40%;
    height: 100%;
    margin-right: 10px;
    border-radius: 15px;

    @media screen and (max-width: 960px){
        width: 100%;
        margin-bottom: 10px;
    }
`

export const ProjectsCard = styled.div`
    display: flex;
    background-color: #f1f1f1;
    width: 60%;
    height: 100%;
    border-radius: 15px;

    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export const AboutMeCard = styled.div`
    display: flex;
    background-color: #f1f1f1;
    width: 100%;
    height: 80%;
    border-radius: 15px;
    margin-bottom: 10px;
`

export const ContactCard = styled.div`
    display: flex;
    background-color: #f1f1f1;
    width: 100%;
    height: 20%;
    border-radius: 15px;
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