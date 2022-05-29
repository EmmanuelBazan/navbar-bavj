import styled from "styled-components"

export const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: red;
`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1000px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: blue;
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-family: "Oswald";
    font-size: 1.2rem;
    color: green;
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({show}) => (show ? 0 : "100%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #49426c;
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "Oswald";
    font-weight: 400;

    &:hover {
        background-color: deeppink;
        border-bottom: 0.3rem solid #ebc00b;
        transition: 0.4s ease-in;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export const MenuItemLink = styled.a`
    text-decoration: none;
    color: gold;
`;

export const IconLogoMobile = styled.div`
    display: none;
    margin: 10px;

    @media screen and (max-width: 960px) {
        display: flex;
        color: #ebc00b;
        font-size: 2rem;
    }
`;




















