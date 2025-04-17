import styled, { keyframes } from 'styled-components';
import {Gears} from '@styled-icons/fa-solid/Gears'

const backgroundColorAnimation = keyframes`
    0% {
        background-color: #f1f1f1;
        color: #0d0d0d;
    }
    100% {
        background-color: #31776E;
        color: #f1f1f1;
    }
`

export const Title = styled.p`
    color: #0d0d0d;
    font-family: 'Playfair+Display', serif;
    font-weight: 700;
    font-size: 4rem;
    background-color: transparent;
    padding: 0px;
    transition: color 0.2s ease;

    @media screen and (max-width: 960px){
        font-size: 1.5rem;
        color: #f1f1f1;
    }
`

export const SubTitle = styled.text`
    color: #0d0d0d;
    font-family: 'Playfair+Display', serif;
    font-weight: 100;
    font-size: 2rem;
    background-color: transparent;
    padding: 0px;
    transition: color 0.2s ease;

    @media screen and (max-width: 960px){
        font-size: 1.0rem;
        color: #f1f1f1;
    }
`

export const ProjectsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;
    width: 60%;
    height: 100%;
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
    animation: none;
    transition: background-color 0.2s ease;

    &:hover {
        animation: ${backgroundColorAnimation} 0.2s linear;
        background-color: #31776E;
    }

    &:hover ${Title} {
        color: #f1f1f1;
    }

    &:hover ${SubTitle} {
        color: #f1f1f1;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        background-color: #31776E;
        padding: 10px;
    }
`

export const GearIcon = styled(Gears)`
    color: #f1f1f1;
    width: 300px;
    height: 300px;
    background-color: transparent;

    @media screen and (max-width: 960px){
        width: 50px;
        height: 50px;
    }
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70%;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: transparent;
`