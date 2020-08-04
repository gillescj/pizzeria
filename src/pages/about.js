import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';

const Container = styled.div`
    display: grid;
`;

const About = () => {
    return (
        <Layout>
            <Container>Hello from About</Container>
        </Layout>
    );
};

export default About;
