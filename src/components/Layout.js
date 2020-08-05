import React from 'react';
import styled from 'styled-components';
import { QUERIES } from 'src/styling';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
    display: grid;
    align-items: start;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`;

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${(props) => props.maxWidth});
    justify-content: center;
    main {
        padding: ${(props) => props.padding};
    }
`;

const Layout = ({
    children,
    maxWidth = QUERIES.maxContentWidth,
    padding = '2rem 1rem',
}) => {
    return (
        <Container>
            <Header />
            <MainWrapper maxWidth={maxWidth} padding={padding}>
                <main>{children}</main>
            </MainWrapper>
            <Footer />
        </Container>
    );
};

export default Layout;
