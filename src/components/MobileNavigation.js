import React, { useState } from 'react';
import { COLOURS, QUERIES } from 'src/styling';
import styled from 'styled-components';
import { Link } from 'gatsby';
import MenuSVG from 'src/assets/svgs/menu.svg';

const Container = styled.div`
    display: none;
    max-width: ${QUERIES.maxWidth};
    z-index: 2;
    @media (${QUERIES.medium}) {
        display: grid;
    }
`;

const Navbar = styled.nav`
    display: grid;
`;

const Topbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: white 1px solid;
`;

const StoreHeading = styled.h3`
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
`;

const HamburgerButton = styled.button`
    background: inherit;
    border: none;
    cursor: pointer;
    svg {
        display: block;
        margin: auto;

        #top {
            transition: all 150ms;
            transform: ${({ open }) => (open ? 'translateY(6px)' : 'translateY(0)')};
            opacity: ${({ open }) => (open ? '0' : '1')};
        }
        #middle {
            transition: all 100ms 150ms;
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
            transform-origin: center;
        }
        #middle-reverse {
            transition: all 100ms 150ms;
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
            transform-origin: center;
        }
        #bottom {
            transition: all 150ms;
            transform: ${({ open }) => (open ? 'translateY(-6px)' : 'translateY(0)')};
            opacity: ${({ open }) => (open ? '0' : '1')};
        }
    }
`;

const Dropdown = styled.ul`
    height: ${(props) => (props.open ? '100%' : '0')};
    visibility: ${(props) => (props.open ? 'visible' : 'collapse')};
    background: ${COLOURS.veryDarkBlue};
    color: white;
    li {
        color: ${COLOURS.textBright};
        font-size: 1.8rem;
        background: inherit;
        border-bottom: 1px white solid;
        margin-top: 1rem;
        padding-left: 1rem;
        line-height: 3rem;
        transition: filter 300ms;
        &:hover {
            filter: brightness(1.5);
        }
    }
`;

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Navbar>
                <Topbar>
                    <Link to="/">
                        <StoreHeading>Gatsby's Pizzeria</StoreHeading>
                    </Link>
                    <HamburgerButton
                        open={open}
                        onClick={() => {
                            setOpen((previousOpen) => !previousOpen);
                        }}
                    >
                        <MenuSVG />
                    </HamburgerButton>
                </Topbar>
                <Dropdown open={open}>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/menu">
                        <li>Menu</li>
                    </Link>
                    <Link to="/delivery">
                        <li>Delivery</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </Dropdown>
            </Navbar>
        </Container>
    );
};

export default MobileNavigation;
