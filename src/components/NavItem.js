import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ChevDownSVG from 'src/assets/svgs/chev-down.svg';

const Container = styled.li`
    font-family: 'Raleway', sans-serif;
    font-size: 1.4rem;
    color: white;
    font-weight: 400;
    text-decoration: inherit;
    padding: 5px 0;
`;

const LabelContainer = styled.div`
    display: flex;
    svg {
        align-self: flex-end;
    }

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
`;

const NavItem = ({ to, name, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Container onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <Link to={to}>
                <LabelContainer>
                    {name}
                    {children ? <ChevDownSVG /> : null}
                </LabelContainer>
            </Link>
            {open && children}
        </Container>
    );
};

export default NavItem;
