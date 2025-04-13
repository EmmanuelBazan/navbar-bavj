import styled, { keyframes } from 'styled-components';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline'

const backgroundColorAnimation = keyframes`
    0% {
        background-color: #f1f1f1;
        color: #0d0d0d;
    }
    100% {
        background-color: #BA2D17;
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

export const ContactCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f1f1f1;
    width: 100%;
    height: 20%;
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
    animation: none;
    transition: background-color 0.2s ease;

    &:hover {
        animation: ${backgroundColorAnimation} 0.2s linear;
        background-color: #BA2D17;
    }

    &:hover ${Title} {
        color: #f1f1f1;
    }

    @media screen and (max-width: 960px){
        background-color: #BA2D17;
    }
`

export const EmailIcon = styled(EmailOutline)`
    color: #f1f1f1;
    width: 100px;
    height: 100px;
    background-color: transparent;
`