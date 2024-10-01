import React, { useState } from "react";
import { 
    IconLogo, 
    MenuItemLink, 
    Menu, 
    NavbarContainer, 
    MenuItem, 
    NavbarWrapper, 
    IconLogoMobile 
} from "./navbar.elements";
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

import useNavbar from "../../hooks/navbar/useNavbar";
const NavBar = ({
    _current_height = 100
}) => {

    const [showMenu,setShowMenu] = useState(false)
    const { show } = useNavbar()

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <NavbarContainer _showHead={show}>
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
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                            handleMenu()
                        }}>
                            <MenuItemLink>HOME</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo({
                                top: _current_height,
                                behavior: "smooth"
                            })
                            handleMenu()
                        }}>
                            <MenuItemLink>ABOUT ME</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo({
                                top: _current_height * 2,
                                behavior: "smooth"
                            })
                            handleMenu()
                        }}>
                            <MenuItemLink>SKILLS</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo({
                                top: _current_height * 3,
                                behavior: "smooth"
                            })
                            handleMenu()
                        }}>
                            <MenuItemLink>PORTAFOLIO</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo({
                                top: _current_height * 4,
                                behavior: "smooth"
                            })
                            handleMenu()
                        }}>
                            <MenuItemLink>EXPERIENCE</MenuItemLink>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            window.scrollTo({
                                top: _current_height * 5,
                                behavior: "smooth"
                            })
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