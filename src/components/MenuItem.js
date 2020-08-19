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

const MenuItem = () => {
    return (
        <Container>
            <Header>
                <h6>Pepperoni Pizza</h6>
                <span>$12.50</span>
            </Header>
            <p>
                Bushwick fam chia pug, man braid PBR&B mlkshk vaporware enamel pin
                mumblecore occupy. Succulents iceland stumptown, XOXO fixie tilde
                biodiesel DIY palo santo vape shoreditch venmo drinking vinegar.
            </p>
            <div>
                <LeafSVG />
            </div>
        </Container>
    );
};

export default MenuItem;
