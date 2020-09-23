import React from 'react';
import styled from 'styled-components';
import { QUERIES } from 'src/styling';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

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
        margin-bottom: 5rem;
    }
`;

const Layout = ({
    children,
    maxWidth = QUERIES.maxContentWidth,
    padding = '2rem 1rem',
}) => {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gatsby's Pizzeria</title>
                <meta
                    name="description"
                    content="Pizzeria restaurant site made with GatsbyJS."
                />
            </Helmet>
            <Header />
            <MainWrapper maxWidth={maxWidth} padding={padding}>
                <main>{children}</main>
            </MainWrapper>
            <Footer />
        </Container>
    );
};

export default Layout;
