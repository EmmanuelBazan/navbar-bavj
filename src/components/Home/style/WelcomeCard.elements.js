import styled, { keyframes } from 'styled-components'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare'
import {Github} from '@styled-icons/boxicons-logos/Github'

const crecerYReducir = keyframes`
    from {
        width: 42px;
        height: 42px;
    }
    to {
        width: 62px;
        height: 62px;
    }
`;

export const WelcomeCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #f1f1f1;
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
    border-radius: 15px;
    padding: 20px;
`

export const MyNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    height: 100%;
`

export const PresentationText = styled.text`
    color: #0d0d0d;
    background-color: transparent;
    font-family: 'Playfair+Display', serif;
    font-weight: 100;
    font-size: 2rem;
    padding: 0px;

    @media screen and (max-width: 960px){
        font-size: 1.8rem
    }
`

export const NameText = styled.text`
    color: #0d0d0d;
    font-family: 'Playfair+Display', serif;
    font-weight: 900;
    font-size: 6rem;
    background-color: transparent;
    padding: 0px;

    @media screen and (max-width: 960px){
        font-size: 3.5rem;
    }
`

export const IconsColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: transparent;
    justify-content: center;
    align-items: flex-end;
`

export const InstagramIcon = styled(Instagram)`
    color: #0d0d0d;
    width: 42px;
    height: 42px;
    background-color: transparent;
    margin-bottom: 10px;
    cursor: pointer;
    animation: none;
    transition: width 0.1s ease, height 0.1s ease;

    &:hover {
        animation: ${crecerYReducir} 0.2s ease-in-out;
        width: 62px;
        height: 62px;
    }
`
export const LinkedinIcon = styled(LinkedinSquare)`
    color: #0d0d0d;
    width: 42px;
    height: 42px;
    background-color: transparent;
    margin-bottom: 10px;
    cursor: pointer;
    animation: none;
    transition: width 0.1s ease, height 0.1s ease;

    &:hover {
        animation: ${crecerYReducir} 0.2s ease-in-out;
        width: 62px;
        height: 62px;
    }
`
export const GithubIcon = styled(Github)`
    color: #0d0d0d;
    width: 42px;
    height: 42px;
    background-color: transparent;
    margin-bottom: 10px;
    cursor: pointer;
    animation: none;
    transition: width 0.1s ease, height 0.1s ease;

    &:hover {
        animation: ${crecerYReducir} 0.2s ease-in-out;
        width: 62px;
        height: 62px;
    }
`