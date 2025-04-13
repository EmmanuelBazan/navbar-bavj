import styled from 'styled-components'
import myPhoto from '../../assets/profil-portafolio.jpg'

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #0D0D0D;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${({_currentHeigth = 100}) => _currentHeigth}px;

    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`

export const PhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 20px;
    background-color: #0D0D0D;
    height: 80%;
    width: 30%;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 40%;
        align-items: center;
        padding: 0px;
    }
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    background-color: #f1f1f1;
    height: 80%;
    width: 60%;
    border-radius: 15px;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 60%;
        align-items: center;
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

export const DescriptionText = styled.text`
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

export const BtnCv = styled.div`
    display: flex;
    background-color: #f1f1f1;
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    border: 3px solid black;
    border-radius: 10px;

    @media screen and (max-width: 960px){
        width: 100%;
        max-width: 500px;
    }
`

export const Photo = styled.div`
    background-image: url(${myPhoto});
    background-size: cover; /* Ajusta la imagen para cubrir completamente el contenedor */
    background-position: center; /* Centra la imagen en el contenedor */
    background-repeat: no-repeat; /* Evita que la imagen se repita */
    background-color: #fff;
    width: 100%;
    height: 100%;
    min-width: 350px;

    @media screen and (max-width: 960px){
        height: 100%;
        max-width: 400px;
        width: 100%;
    }
`