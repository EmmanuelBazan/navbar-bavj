import React, { useState } from "react";
import { IconLogo, MenuItemLink, Menu, NavbarContainer, MenuItem, NavbarWrapper, IconLogoMobile } from "./navbar.elements";
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";


const NavBar = () => {

    const [showMenu,setShowMenu] = useState(false)

    const openMenu = () => {
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

                    <IconLogoMobile onClick={() => openMenu()}>
                        {
                            showMenu ?
                            <CgClose/>
                            :
                            <FaBars/>
                        }
                    </IconLogoMobile>
                    
                    <Menu show={showMenu}>
                        <MenuItem onClick={() => openMenu()}>
                            <MenuItemLink>ABOUT ME</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => openMenu()}>
                            <MenuItemLink>PORTAFOLIO</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => openMenu()}>
                            <MenuItemLink>SKILLS</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => openMenu()}>
                            <MenuItemLink>EXPERIENCE</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => openMenu()}>
                            <MenuItemLink>CONTACT</MenuItemLink>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    )
}

export default NavBar