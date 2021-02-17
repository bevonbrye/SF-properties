import React from 'react';
import styled, {css} from 'styled-components/macro';
import  {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData'


//----------Style One: 
const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding:1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background:black;
`
//----------Style Two: 

const NavLink = css`
    color: white; 
    display: flex;
    align-items: center;
    padding: 0 1rem;
    text-decoration: none;
    height:100%;

`

//----------Style Three:

const MenuBars = styled.i``


//----------Style Four:

const NavMenu = styled.div`
    display:flex;
    align-items:center;
    `

//----------Style Five:

const NavMenuLinks = styled(Link)`
    ${NavLink}
`


//----------Style Five:

const Logo = styled(Link)`
    ${NavLink}
    font-style:italic;
`

const Navbar = () => {
    return (
        <Nav>
        <Logo to={'/'}> SF Properties </Logo>
        <MenuBars/>
        {/* alternate way to display items on within data with Items being the the actual data and index being teh key */}
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                     
                     {item.title}

                </NavMenuLinks>
            ))}
        </NavMenu>
            
        </Nav>
    )
}

export default Navbar
