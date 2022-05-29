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
                            <MenuItemLink>HOME</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => openMenu()}>
                            <MenuItemLink>ABOUR US</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => openMenu()}>
                            <MenuItemLink>SERVICES</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => openMenu()}>
                            <MenuItemLink>COMUNITY</MenuItemLink>
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