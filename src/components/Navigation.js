import React from 'react';
import { QUERIES } from 'src/styling';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PizzaSVG from 'src/assets/svgs/pizza.svg';

export const Container = styled.nav`
    display: grid;
    max-width: ${QUERIES.maxWidth};
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 1rem;
    a {
        color: inherit;
    }
    @media (${QUERIES.medium}) {
        display: none;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    span {
        color: white;
        font-size: 2rem;
        font-family: 'Dancing Script', cursive;
    }
`;

const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-self: center;
    z-index: 2;
    li * {
        font-family: 'Raleway', sans-serif;
        font-size: 1.4rem;
        color: white;
        font-weight: bold;
        text-decoration: inherit;
    }
    li > a {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -9px;
            left: 0;
            right: 0;
            background-color: white;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.04, 0.77, 0.44, 1.01);
        }
        &:hover {
            &::after {
                visibility: visible;
                opacity: 1;
                transform: translateY(-6px);
            }
        }
    }
`;

const FirstNav = styled(NavUl)`
    li {
        margin-right: 2rem;
    }
`;
const SecondNav = styled(NavUl)`
    li {
        margin-left: 2rem;
    }
`;

const PizzaSVGContainer = styled.div`
    padding: 0 1rem;
    svg {
        width: 90px;
        height: 90px;
    }
`;

const Navigation = () => {
    return (
        <Container>
            <FirstNav>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
            </FirstNav>
            <LogoContainer>
                <span>Gatsby's</span>
                <Link to="/">
                    <PizzaSVGContainer>
                        <PizzaSVG />
                    </PizzaSVGContainer>
                </Link>
                <span>Pizzeria</span>
            </LogoContainer>
            <SecondNav>
                <li>
                    <Link to="/delivery">Delivery</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </SecondNav>
        </Container>
    );
};

export default Navigation;
