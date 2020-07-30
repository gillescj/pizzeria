import React from 'react';
import styled from 'styled-components';
import { QUERIES, COLOURS } from 'src/styling';

const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
    justify-content: center;
    background: ${COLOURS.veryDarkBlue};
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem;
    grid-gap: 5rem 2rem;

    @media (${QUERIES.large}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (${QUERIES.small}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const InfoContainer = styled.section`
    color: white;
    h3 {
        padding-bottom: 2.5rem;
        text-transform: uppercase;
        font-weight: normal;
    }

    li {
        padding: 0.25rem 0;
        font-weight: 300;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <InfoContainer>
                    <h3>Hours</h3>
                    <ul>
                        <li>Sunday: CLOSED</li>
                        <li>Monday: 11am - 7pm</li>
                        <li>Tuesday: 11am - 7pm</li>
                        <li>Wednesday: 11am - 7pm</li>
                        <li>Thursday: 11am - 7pm</li>
                        <li>Friday: 11am - 8pm</li>
                        <li>Saturday: 12pm - 8pm</li>
                    </ul>
                </InfoContainer>
                <InfoContainer>
                    <h3>Location</h3>
                    <ul>
                        <li>101 Fake Street</li>
                        <li>FakeMetropolis, FA</li>
                        <li>A1A 1A1</li>
                    </ul>
                </InfoContainer>
                <InfoContainer>
                    <h3>Phone</h3>
                    <li>(111) 111-1111</li>
                </InfoContainer>
                <InfoContainer>
                    <h3>Email</h3>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
};

export default Footer;
