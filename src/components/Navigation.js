import React from 'react';
import { COLOURS, QUERIES } from 'src/styling';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PizzaSVG from 'src/assets/svgs/pizza.svg';
import NavItem from './NavItem';
import MenuDropdown from './MenuDropdown';

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
    svg {
        transition: filter 300ms;
    }
    span {
        a {
            color: white;
            font-size: 2.4rem;
            font-family: 'Dancing Script', cursive;
        }
    }
    &:hover {
        svg {
            filter: brightness(0.9);
        }
    }
`;

const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-self: center;
    z-index: 2;
    li * {
    }
    li > a {
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
                <NavItem to="/about" name="About" />
                <NavItem to="/menu" name="Menu">
                    <MenuDropdown />
                </NavItem>
            </FirstNav>
            <LogoContainer>
                <span>
                    <Link to="/">Gatsby's</Link>
                </span>
                <Link to="/">
                    <PizzaSVGContainer>
                        <PizzaSVG />
                    </PizzaSVGContainer>
                </Link>
                <span>
                    <Link to="/">Pizzeria</Link>
                </span>
            </LogoContainer>
            <SecondNav>
                <NavItem to="/delivery" name="Delivery" />
                <NavItem to="/contact" name="Contact" />
            </SecondNav>
        </Container>
    );
};

export default Navigation;
