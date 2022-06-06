import styled from "styled-components"

export const NavbarContainer = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    top: ${({_showHead}) => (_showHead ? 0 : "-50px")};
    z-index: 99;
    background-color: #000409;
    padding: 10px;
`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    //max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #000409;
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-family: "Oswald";
    font-size: 1rem;
    color: #fff;
    font-family: 'Quicksand', sans-serif;
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
        top: 50px;
        left: ${({show}) => (show ? 0 : "100%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #000409;
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: "Oswald";
    font-weight: 400;

    &:hover {
        background-color: #000409;
        border-bottom: 0.3rem solid #ebc00b;
        transition: 0.4s ease-in;
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export const MenuItemLink = styled.a`
    text-decoration: none;
    color: #fff;
    font-family: 'Quicksand', sans-serif;
`;

export const IconLogoMobile = styled.div`
    display: none;
    margin: 10px;

    @media screen and (max-width: 960px) {
        display: flex;
        color: #fff;
        font-size: 1rem;
    }
`;




















