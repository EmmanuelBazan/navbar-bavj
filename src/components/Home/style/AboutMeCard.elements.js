import styled, { keyframes } from 'styled-components';
import {Bookstack} from '@styled-icons/simple-icons/Bookstack'
import profileImg from "../../../assets/profil-portafolio.jpg";

const backgroundColorAnimation = keyframes`
    0% {
        background-color: #f1f1f1;
        color: #0d0d0d;
    }
    100% {
        background-color: #343644;
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

export const AboutMeContainer = styled.div`
    display: flex;
    background-color: #f1f1f1;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 80%;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 20px;
    cursor: pointer;
    /* animation: none; */
    /* transition: background-color 0.2s ease; */

    /* background-image: url('https://i.pinimg.com/564x/56/dc/f3/56dcf3ebaa545146695ee13371c5fb7a.jpg'); Imagen de fondo */
    background-image: url(${profileImg});
    background-size: cover; /* Ajusta la imagen para cubrir completamente el contenedor */
    background-position: center; /* Centra la imagen en el contenedor */
    background-repeat: no-repeat; /* Evita que la imagen se repita */

    /* &:hover {
        animation: ${backgroundColorAnimation} 0.2s linear;
        background-color: #343644;
    }

    &:hover ${Title} {
        color: #f1f1f1;
    }

    &:hover ${SubTitle} {
        color: #f1f1f1;
    } */

    @media screen and (max-width: 960px){
        width: 100%;
        margin-bottom: 10px;
        background-color: #343644;
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