import React from 'react';
import { COLOURS } from 'src/styling';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';
import { useSpring, animated } from 'react-spring';

const HoverWrapper = styled.div`
    position: absolute;
    padding: 1rem;
    padding-top: 0.5rem;
    transform: translateX(-40px);
`;

const Container = styled.div`
    display: grid;
    grid-gap: 3px;
    padding: 1rem;
    color: white;
    background: ${COLOURS.veryDarkBlue};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: display 3s ease-in-out;
`;

const MenuDropdown = () => {
    const animProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 300 },
    });

    return (
        <animated.div style={animProps}>
            <HoverWrapper>
                <Container>
                    <Link to="/menu">
                        <DropdownItem>Main Menu</DropdownItem>
                    </Link>
                    <Link to="/drinkMenu">
                        <DropdownItem>Drink Menu</DropdownItem>
                    </Link>
                </Container>
            </HoverWrapper>
        </animated.div>
    );
};

export default MenuDropdown;
