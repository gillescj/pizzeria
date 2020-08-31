import React from 'react';
import { COLOURS } from 'src/styling';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';

const Container = styled.div`
    position: absolute;
    display: grid;
    grid-gap: 1rem;
    top: 85px;
    padding: 2rem;
    color: white;
    background: ${COLOURS.veryDarkBlue};
    border-radius: 4px;
`;

const MenuDropdown = ({}) => {
    return (
        <Container>
            <DropdownItem>
                <Link to="/menu">Main Menu</Link>
            </DropdownItem>
            <DropdownItem>
                <Link to="/drinkMenu">Drink Menu</Link>
            </DropdownItem>
        </Container>
    );
};

export default MenuDropdown;
