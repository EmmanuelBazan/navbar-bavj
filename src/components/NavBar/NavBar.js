import React from "react";
import { IconLogo, MenuItemLink, Menu, NavbarContainer, MenuItem, NavbarWrapper, IconLogoMobile } from "./navbar.elements";
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";


const NavBar = () => {
    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                        <AiFillAlipayCircle size={"2em"}/>
                        BAVJ
                    </IconLogo>

                    <IconLogoMobile>
                        <FaBars/>
                    </IconLogoMobile>
                    
                    <Menu>
                        <MenuItem>
                            <MenuItemLink>HOME</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>ABOUR US</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>SERVICES</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>COMUNITY</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>CONTACT</MenuItemLink>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    )
}

export default NavBar