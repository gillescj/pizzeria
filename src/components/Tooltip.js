import React from 'react';
import styled from 'styled-components';
import { COLOURS } from 'src/styling';

const Container = styled.div`
    position: absolute;
    display: inline-block;
    padding: 0.75rem 1rem;
    margin-left: 1rem;
    border: 2px solid ${COLOURS.textMain};
    border-radius: 0.25rem;
    background: white;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02), 0 0px 5.3px rgba(0, 0, 0, 0.028),
        0 0px 10px rgba(0, 0, 0, 0.035), 0 0px 17.9px rgba(0, 0, 0, 0.042),
        0 0px 33.4px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.07);
`;

const Tooltip = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Tooltip;
