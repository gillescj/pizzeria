import React, { useState } from 'react';
import { Link } from 'gatsby';

const NavItem = ({ to, name, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <Link
                to={to}
                onMouseEnter={() => setOpen(!open)}
                onMouseLeave={() => setOpen(false)}
            >
                {name}
            </Link>
            {open && children}
        </li>
    );
};

export default NavItem;
