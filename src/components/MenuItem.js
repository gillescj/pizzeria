import React from 'react';
import styled from 'styled-components';
import LeafSVG from 'src/assets/svgs/leaf.svg';

const Container = styled.section`
    display: grid;
    grid-gap: 0.75rem;
    svg {
        width: 18px;
        height: 18px;
    }
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    h6 {
        font-weight: bold;
        font-size: 1rem;
    }
`;

const MenuItem = ({ title, price, description, vegetarian }) => {
    return (
        <Container>
            <Header>
                <h6>{title}</h6>
                <span>{price}</span>
            </Header>
            <p>{description}</p>
            <div>{vegetarian ? <LeafSVG /> : null}</div>
        </Container>
    );
};

export default MenuItem;
