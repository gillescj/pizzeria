import React from 'react';
import { COLOURS } from 'src/styling';
import styled from 'styled-components';

const Container = styled.div`
    line-height: 1.5rem;
    border-radius: 10px;
    transition: background 700ms;
    padding: 2rem;

    &:hover {
        background: ${COLOURS.darkGrey};
    }
`;

const DropdownItem = ({ children }) => {
    return <Container>{children}</Container>;
};

export default DropdownItem;
