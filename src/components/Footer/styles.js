import styled from 'styled-components';
import { QUERIES, COLOURS } from 'src/styling';

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
    justify-content: center;
    background: ${COLOURS.veryDarkBlue};
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 5rem;
    grid-gap: 5rem 2rem;

    @media (${QUERIES.large}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (${QUERIES.small}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const InfoContainer = styled.section`
    color: white;
    h3 {
        padding-bottom: 0.5rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-weight: normal;
        border-bottom: 1px solid white;
        max-width: 15rem;
    }

    li {
        padding: 0.25rem 0;
        font-weight: 300;
    }
`;
