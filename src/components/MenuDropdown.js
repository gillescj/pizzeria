import React from 'react';
import { COLOURS } from 'src/styling';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DropdownItem from './DropdownItem';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
    position: absolute;
    display: grid;
    grid-gap: 3px;
    top: 78px;
    padding: 1rem;
    color: white;
    background: ${COLOURS.veryDarkBlue};
    border-radius: 10px;
    transition: display 3s ease-in-out;
    transform: translateX(-20px);
`;

const MenuDropdown = () => {
    const animProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 300 },
    });

    return (
        <animated.div style={animProps}>
            <Container>
                <Link to="/menu">
                    <DropdownItem>Main Menu</DropdownItem>
                </Link>
                <Link to="/drinkMenu">
                    <DropdownItem>Drink Menu</DropdownItem>
                </Link>
            </Container>
        </animated.div>
    );
};

export default MenuDropdown;
