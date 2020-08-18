import React from 'react';
import styled from 'styled-components';

const Container = styled.section``;

const MenuHeader = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 2rem;
    padding-bottom: 0.4rem;
    &::before,
    &::after {
        content: '';
        border-top: 3px solid black;
        color: black;
        flex: 1 0 20px;
        margin: 0 1rem;
    }
`;

const Subheader = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
`;

const MenuItem = styled.section``;

const MenuSection = () => {
    return (
        <Container>
            <MenuHeader>Slice City</MenuHeader>
            <Subheader>Gourmet Pizzas</Subheader>
            <div>
                <MenuItem></MenuItem>
            </div>
        </Container>
    );
};

export default MenuSection;
