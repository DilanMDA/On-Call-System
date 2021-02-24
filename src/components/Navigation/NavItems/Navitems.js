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
                <NavItem link='/'>Home</NavItem>
                <NavItem link='todos'>Todos</NavItem>
                 
            </Ul>
            
        </Nav>
    )
}

export default NavItems;