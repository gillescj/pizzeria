import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const Container = styled.span``;

const MenuIcon = ({ children, message }) => {
    const [open, setOpen] = useState(false);

    return (
        <Container onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            {children}

            {open && <Tooltip>{message}</Tooltip>}
        </Container>
    );
};

export default MenuIcon;
