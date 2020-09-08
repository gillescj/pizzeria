import { COLOURS, QUERIES } from 'src/styling';
import styled from 'styled-components';

export const Container = styled.header`
    display: grid;
    background: ${COLOURS.bluewood};
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
    @media (${QUERIES.medium}) {
        box-shadow: none;
        background: ${COLOURS.bluewood};
    }
`;

export const Wrapper = styled.div`
    grid-row: 1;
    grid-column: 1;
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
`;

export const MiddleBanner = styled.div`
    background: ${COLOURS.veryDarkBlue};
    padding: 1.5rem;
    grid-row: 1;
    grid-column: 1;
    height: 1rem;
    align-self: center;
    box-shadow: 0 0px 12px hsla(0, 0%, 100%, 0.05);
    @media (${QUERIES.medium}) {
        display: none;
    }
`;
