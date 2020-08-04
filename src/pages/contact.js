import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';

const Container = styled.div`
    display: grid;
`;

const Contact = () => {
    return (
        <Layout>
            <Container>Hello from Contact</Container>
        </Layout>
    );
};

export default Contact;
