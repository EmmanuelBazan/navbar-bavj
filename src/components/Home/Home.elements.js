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

export const ExpirienceContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;

    @media screen and (max-width: 960px){
        flex-direction: column;
        height: 60%;
    }
`

export const TextPresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
    max-width: 400px;
    margin: 20px;
`



export const IconContariner = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    width: 42px;
    height: 42px;
    margin-bottom: 10px;
`



