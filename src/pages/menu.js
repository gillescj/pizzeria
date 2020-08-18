import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import PageHeader from 'src/components/PageHeader';
import MenuSection from '../components/MenuSection';

const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, 60rem);
    justify-content: center;
`;

const Menu = () => {
    return (
        <Layout padding="0" maxWidth="100%">
            <PageHeader pageName="Menu" />
            <Container>
                <MenuSection />
            </Container>
        </Layout>
    );
};

export default Menu;
