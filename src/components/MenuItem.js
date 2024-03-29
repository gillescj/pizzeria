import React from 'react';
import { COLOURS } from 'src/styling';
import styled from 'styled-components';
import LeafSVG from 'src/assets/svgs/leaf.svg';
import MenuIcon from './MenuIcon';

const Container = styled.section`
    display: grid;
    grid-gap: 0.75rem;
    align-content: start;
    svg {
        width: 18px;
        height: 18px;
        fill: ${COLOURS.textSecondary};
    }
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    h6 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.2rem;
        color: ${COLOURS.textMain};
    }
`;

const Price = styled.span`
    text-align: end;
    padding-left: 1rem;
    align-self: center;
    white-space: nowrap;
`;

const Description = styled.p`
    line-height: 1.8;
    color: ${COLOURS.textSecondary};
`;

const MenuItem = ({ title, price, description, vegetarian }) => {
    let renderedPrice;
    if (typeof price != 'string') {
        renderedPrice = price.map((priceItem) => {
            return <li>{priceItem}</li>;
        });
    } else {
        renderedPrice = price;
    }

    return (
        <Container>
            <Header>
                <h6>{title}</h6>
                <Price>{renderedPrice}</Price>
            </Header>
            {!description ? null : (
                <>
                    <Description>{description}</Description>
                    <div>
                        {vegetarian ? (
                            <MenuIcon message="Vegetarian">
                                <LeafSVG />
                            </MenuIcon>
                        ) : null}
                    </div>
                </>
            )}
        </Container>
    );
};

export default MenuItem;
