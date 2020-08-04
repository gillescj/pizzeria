import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';

const Container = styled.div`
    display: grid;
`;

const Delivery = () => {
    return (
        <Layout>
            <Container>Hello from Delivery</Container>
        </Layout>
    );
};

export default Delivery;
