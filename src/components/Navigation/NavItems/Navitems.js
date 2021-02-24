import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';

const Nav = styled.nav`
display:flex;
`;

const Ul = styled.ul`
display:flex;
align-items: center;
height:100%;
`;

const NavItems = () => {
    return (
        <Nav>
            <Ul>
                <NavItem>home</NavItem>
                <NavItem>another link1</NavItem>
                <NavItem>another link2</NavItem>
            </Ul>
            
        </Nav>
    )
}

export default NavItems;
