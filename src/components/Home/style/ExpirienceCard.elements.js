import styled, { keyframes } from 'styled-components';
import {Bookstack} from '@styled-icons/simple-icons/Bookstack'

const backgroundColorAnimation = keyframes`
    0% {
        background-color: #f1f1f1;
        color: #0d0d0d;
    }
    100% {
        background-color: #E98807;
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
        font-size: 3.5rem;
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
        font-size: 1rem;
        color: #f1f1f1;
    }
`

export const ExpirienceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #f1f1f1;
    width: 40%;
    height: 100%;
    margin-right: 10px;
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
    animation: none;
    transition: background-color 0.2s ease;

    &:hover {
        animation: ${backgroundColorAnimation} 0.2s linear;
        background-color: #E98807;
    }

    &:hover ${Title} {
        color: #f1f1f1;
    }

    &:hover ${SubTitle} {
        color: #f1f1f1;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        margin-bottom: 10px;
        background-color: #E98807;
    }
`

export const BookIcon = styled(Bookstack)`
    color: #f1f1f1;
    width: 200px;
    height: 200px;
    background-color: transparent;
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70%;
    justify-content: flex-end;
    background-color: transparent;
`