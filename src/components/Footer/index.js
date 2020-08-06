import React from 'react';
import { Container, Wrapper, InfoContainer } from './styles';

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
                    <li>Delivery: (111) 111-1111</li>
                    <li>House: (111) 111-1111</li>
                </InfoContainer>
                <InfoContainer>
                    <h3>Email</h3>
                    <li>fake-email@fake.com</li>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
};

export default Footer;
