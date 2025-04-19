import styled from 'styled-components'
import {WHITE_F1} from '../../constants/colors'

export const SkillsContainer = styled.div`
    background-color: #0d0d0d;
    display: flex;
    flex-direction: column;
    width: "100%";
    align-items: center;
    justify-content: center;
    height: 100vh;//${({_currentHeight}) => _currentHeight}px;

    
`;

export const FirstBox = styled.div`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 100%;
        padding: 10px;
        justify-content: start;
    }
`

export const LineBox = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    flex-direction: row;
`

export const TitleCard = styled.div`
    background-color: #f1f1f1;
    width: 100%;
    height: 250px;
    border-radius: 15px;
    padding-left: 20px;
    /* align-items: center; */
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 15%;
        padding: 10px;
    }
`

export const LongCard = styled.div`
    background-color: #f1f1f1;
    width: 80%;
    height: 100%;
    border-radius: 15px;
    padding-left: 20px;
    /* align-items: center; */
    justify-content: left;
    align-items: center;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 960px){
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 60%;
    }
`

export const ShortCard = styled.div`
    background-color: #f1f1f1;
    width: 20%;
    height: 100%;
    border-radius: 15px;
    padding-left: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 960px){
        padding: 10px;
        width: 40%;
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
        font-size: 2.2rem;
    }
`

export const H1Text = styled.p`
    color: #0d0d0d;
    font-family: 'Playfair+Display', serif;
    font-weight: 600;
    font-size: 2rem;
    background-color: transparent;
    padding: 0px;
    transition: color 0.2s ease;
    margin-right: 10px;

    @media screen and (max-width: 960px){
        font-size: 1.8rem;
    }
`

export const H2Text = styled.p`
    color: #0d0d0d;
    font-family: 'Playfair+Display', serif;
    font-weight: 500;
    font-size: 2rem;
    background-color: transparent;
    padding: 0px;
    transition: color 0.2s ease;

    @media screen and (max-width: 960px){
        font-size: 1.3rem;
    }
`

export const H3Text = styled.p`
    color: #0d0d0d;
    font-family: 'Playfair+Display', serif;
    font-weight: 400;
    font-size: 1.5rem;
    background-color: transparent;
    padding: 0px;
    transition: color 0.2s ease;

    @media screen and (max-width: 960px){
        font-size: 1.0rem;
    }
`

export const SpaceRow = styled.div`
    width: 0px;
    height: 10px;
`

export const SpaceColumn = styled.div`
    width: 10px;
    height: 0px;
`