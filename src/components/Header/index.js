import React from 'react';
import {
    Container,
    Wrapper,
    MiddleBanner,
    NavContainer,
    LogoContainer,
    FirstNav,
    SecondNav,
    SVGContainer,
} from './styles';
import { Link } from 'gatsby';
import PizzaSVG from 'src/assets/svgs/pizza.svg';

const Header = () => {
    return (
        <Container>
            <MiddleBanner />
            <Wrapper>
                <NavContainer>
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
                            <SVGContainer>
                                <PizzaSVG />
                            </SVGContainer>
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
                </NavContainer>
            </Wrapper>
        </Container>
    );
};

export default Header;
