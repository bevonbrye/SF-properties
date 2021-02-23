import React from 'react';
import styled, {css} from 'styled-components/macro';
import  {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData'
import  { Button } from './Button';
import { CgMenuMotion } from 'react-icons/cg'


//----------Style One: 
const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding:1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    ${'' /* background:black; */}
;
`
//----------Style Two: 

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

`

//----------Style Three:

const MenuBars = styled(CgMenuMotion)`
    display:none;

    @media screen and (max-width: 768px ) { 
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color:white;
    } 

`;


//----------Style Four:

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

//----------Style Five:

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;


//----------Style Five:

const Logo = styled(Link)`
    ${NavLink}
    font-style:italic;

`;

//----------Style Six:

const NavBtn = styled.div`
    display: flex; 
    align-items: center;
    margin-right: 30px;
    @media screen and (max-width: 768px ) { 
        display:none;
    } 
`

const Navbar = ({ toggle }) => {
    return (
        <Nav>
        <Logo to={'/'}> SF Properties </Logo>
        <MenuBars onClick={toggle}/>
        {/* alternate way to display items on within data with Items being the the actual data and index being teh key */}
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                     
                     {item.title}

                </NavMenuLinks>
            ))}
        </NavMenu>
            <NavBtn>
                <Button to={'/contacts'}>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
