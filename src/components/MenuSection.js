import React from 'react';
import { QUERIES } from 'src/styling';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Container = styled.section``;

const MenuHeader = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
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
    font-weight: 600;
    padding-bottom: 4rem;
`;

const MenuItemContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    @media (${QUERIES.medium}) {
        grid-template-columns: 1fr;
    }
`;

const MenuSection = ({ info: { heading, subHeading }, sectionItems }) => {
    const renderedSectionItems = sectionItems.map((item) => {
        return (
            <MenuItem
                title={item.title}
                price={item.price}
                description={item.description}
                vegetarian={item.vegetarian}
            />
        );
    });

    return (
        <Container>
            <MenuHeader>{heading}</MenuHeader>
            <Subheader>{subHeading}</Subheader>
            <MenuItemContainer>{renderedSectionItems}</MenuItemContainer>
        </Container>
    );
};

export default MenuSection;
