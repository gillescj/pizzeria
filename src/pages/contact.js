import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import PageHeader from 'src/components/PageHeader';

const Container = styled.div`
    display: grid;
`;

const Contact = () => {
    return (
        <Layout padding="0" maxWidth="100%">
            <PageHeader pageName="Contact" />
            <Container>Hello from Contact</Container>
        </Layout>
    );
};

export default Contact;
