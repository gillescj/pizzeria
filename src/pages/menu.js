import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import PageHeader from 'src/components/PageHeader';

const Container = styled.div`
    display: grid;
`;

const Menu = () => {
    return (
        <Layout padding="0" maxWidth="100%">
            <PageHeader pageName="Menu" />
            <Container>Hello from Menu</Container>
        </Layout>
    );
};

export default Menu;
