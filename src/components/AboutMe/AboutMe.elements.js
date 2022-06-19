import styled from 'styled-components'
import myPhoto from '../../assets/profil-portafolio.jpg'

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #0D0D0D;
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
    height: 100%;
    width: 40%;

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
    padding: 20px;
    background-color: #0D0D0D;
    height: 100%;
    width: 60%;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 60%;
        align-items: center;
    }
`

export const Title = styled.text`
    color: #BF8136;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 300;
`

export const DescriptionText = styled.text`
    color: #FFFBF4;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    max-width: 500px;
`

export const BtnCv = styled.div`
    display: flex;
    background-color: #BF8136;
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 960px){
        width: 100%;
        max-width: 500px;
    }
`

export const Photo = styled.div`
    background-image: url(${myPhoto});
    background-color: #fff;
    width: 80%;
    height: 80%;
    min-width: 350px;

    @media screen and (max-width: 960px){
        height: 100%;
        max-width: 400px;
        width: 100%;
    }
`