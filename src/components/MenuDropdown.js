import React from 'react';
import { COLOURS } from 'src/styling';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';

const Container = styled.div`
    position: absolute;
    display: grid;
    top: 78px;
    padding: 1rem;
    color: white;
    background: ${COLOURS.veryDarkBlue};
    border-radius: 10px;
    transition: display 3s ease-in-out;
`;

const MenuDropdown = () => {
    return (
        <Container>
            <Link to="/menu">
                <DropdownItem>Main Menu</DropdownItem>
            </Link>
            <Link to="/drinkMenu">
                <DropdownItem>Drink Menu</DropdownItem>
            </Link>
        </Container>
    );
};

export default MenuDropdown;
