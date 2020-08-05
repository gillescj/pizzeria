import React from 'react';
import { COLOURS } from 'src/styling';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    background: ${COLOURS.pink};
    h3 {
        font-size: 2rem;
        text-transform: uppercase;
        color: white;
        font-weight: 400;
    }
`;

const PageHeader = ({ pageName }) => {
    return (
        <Container>
            <h3>{pageName}</h3>
        </Container>
    );
};

export default PageHeader;
