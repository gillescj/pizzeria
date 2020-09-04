import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ChevDownSVG from 'src/assets/svgs/chev-down.svg';

const LabelContainer = styled.div`
    display: flex;
    svg {
        align-self: flex-end;
    }
`;

const NavItem = ({ to, name, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <Link
                to={to}
                onMouseEnter={() => setOpen(!open)}
                onMouseLeave={() => setOpen(false)}
            >
                <LabelContainer>
                    {name}
                    {children ? <ChevDownSVG /> : null}
                </LabelContainer>
            </Link>
            {open && children}
        </li>
    );
};

export default NavItem;
