import React, { useState } from "react";
import { IconLogo, MenuItemLink, Menu, NavbarContainer, MenuItem, NavbarWrapper, IconLogoMobile } from "./navbar.elements";
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const CURRENT_HEIGTH = window.innerHeight

const NavBar = ({
    homeRef,
    aboutMeRef,
    skillsRef,
    portafolioRef,
    experienceRef,
    contactRef
}) => {

    const [showMenu,setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                        <AiFillAlipayCircle size={"2em"}/>
                        BAVJ
                    </IconLogo>

                    <IconLogoMobile onClick={() => handleMenu()}>
                        {
                            showMenu ?
                            <CgClose/>
                            :
                            <FaBars/>
                        }
                    </IconLogoMobile>
                    
                    <Menu show={showMenu}>
                        <MenuItem onClick={() => {
                            window.scrollTo(0, CURRENT_HEIGTH - 80)
                            handleMenu()
                        }}>
                            <MenuItemLink>ABOUT ME</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo(0, CURRENT_HEIGTH * 2 - 80)
                            handleMenu()
                        }}>
                            <MenuItemLink>SKILLS</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo(0, CURRENT_HEIGTH * 3 - 80)
                            handleMenu()
                        }}>
                            <MenuItemLink>PORTAFOLIO</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo(0, CURRENT_HEIGTH * 4 - 80)
                            handleMenu()
                        }}>
                            <MenuItemLink>EXPERIENCE</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo(0, CURRENT_HEIGTH * 5 - 80)
                            handleMenu()
                        }}>
                            <MenuItemLink>CONTACT</MenuItemLink>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    )
}

export default NavBar