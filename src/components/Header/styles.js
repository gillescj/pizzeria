import { COLOURS, QUERIES } from 'src/styling';
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    background: ${COLOURS.coral};
    box-shadow: 0 4px 10px hsla(0, 0%, 0%, 20%);
`;

export const Wrapper = styled.div`
    grid-row: 1;
    grid-column: 1;
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
`;

export const MiddleBanner = styled.div`
    background: ${COLOURS.orange};
    padding: 1.5rem;
    grid-row: 1;
    grid-column: 1;
    height: 1rem;
    align-self: center;
    box-shadow: 0 4px 10px hsla(0, 0%, 0%, 20%);
    z-index: 1;
`;

export const NavContainer = styled.nav`
    display: grid;
    max-width: ${QUERIES.maxWidth};
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 1rem;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    span {
        color: white;
        font-size: 2rem;
        font-family: 'Dancing Script', cursive;
    }
`;

export const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-self: center;
    z-index: 2;
    li * {
        font-family: 'Raleway', sans-serif;
        font-size: 1.2rem;
        color: white;
        font-weight: bold;
        text-decoration: inherit;
    }
`;

export const FirstNav = styled(NavUl)`
    li {
        margin-right: 2rem;
    }
`;
export const SecondNav = styled(NavUl)`
    li {
        margin-left: 2rem;
    }
`;

export const SVGContainer = styled.div`
    padding: 0 1rem;
`;
