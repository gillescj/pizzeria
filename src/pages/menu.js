import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';

const Container = styled.div`
    display: grid;
`;

const Menu = () => {
    return (
        <Layout>
            <Container>Hello from Menu</Container>
        </Layout>
    );
};

export default Menu;
