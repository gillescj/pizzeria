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
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
    justify-content: center;
    main {
        padding: 1rem;
    }
`;

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <MainWrapper>
                <main>{children}</main>
            </MainWrapper>
            <Footer />
        </Container>
    );
};

export default Layout;
