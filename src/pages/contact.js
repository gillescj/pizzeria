import React from 'react';
import { QUERIES, COLOURS } from 'src/styling';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import PageHeader from 'src/components/PageHeader';
import ContactForm from 'src/components/ContactForm';
import Map from 'src/components/Map';
import SocialMedia from '../components/SocialMedia';

const Container = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
    justify-content: center;
    padding: 2rem 1rem;
`;

const TextDetails = styled.section`
    display: grid;
    justify-items: center;
    grid-gap: 2rem;
    p {
        text-align: center;
        max-width: 50rem;
        font-size: 1.2rem;
        color: ${COLOURS.textMain};
    }
`;

const ContactInfo = styled.section`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 0.5fr 1fr;
    @media (${QUERIES.medium}) {
        grid-template-columns: 1fr;
    }
`;

const ContactInfoSection = styled.section`
    justify-self: center;
    border: 2px dashed ${COLOURS.pink};
    border-radius: 3px;
    padding: 1rem 2rem 2rem 2rem;
    color: ${COLOURS.textMain};
    width: 100%;
    header {
        margin-bottom: 1rem;
        h3 {
            color: ${COLOURS.maroon};
            text-transform: uppercase;
            text-align: center;
            font-size: 2rem;
            font-weight: 600;
            padding-bottom: 1rem;
        }
    }
    li,
    div {
        font-size: 1.5rem;
        text-align: center;
    }
    svg {
        color: ${COLOURS.textMain};
    }
    @media (${QUERIES.medium}) {
        width: 100%;
    }
`;

const ConnectInfoSection = styled(ContactInfoSection)`
    div {
        justify-content: center;
    }
`;

const MapForm = styled.section`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 3fr 2fr;
    width: 100%;
    @media (${QUERIES.medium}) {
        grid-template-columns: 1fr;
        grid-gap: 4rem;
        & > div {
            min-height: 20rem;
        }
    }
`;

const Contact = () => {
    return (
        <Layout padding="0" maxWidth="100%">
            <PageHeader pageName="Contact" />
            <Container>
                <TextDetails>
                    <p>
                        Atque nihil at dolorem explicabo qui natus velit. Exercitationem
                        error sequi deserunt. Harum necessitatibus voluptates magnam
                        maiores dolorem et. Reprehenderit sed quis ut similique iste.
                        Quisquam officiis quae assumenda ut.
                    </p>
                    <p>
                        Autem qui eveniet modi libero adipisci est eum itaque. Et ut
                        soluta et culpa distinctio est. Debitis mollitia ducimus quo quia
                        modi non eveniet. Sint et dolor in doloremque sint. Suscipit
                        labore asperiores sint repellat.
                    </p>
                    <p>
                        Error laudantium et sed earum. Facere molestiae sunt impedit. Vero
                        et et qui quisquam perferendis iure officiis dolorem. Quia est
                        odit perspiciatis nesciunt nemo est aspernatur.
                    </p>
                </TextDetails>
                <ContactInfo>
                    <ContactInfoSection>
                        <header>
                            <h3>Address</h3>
                        </header>
                        <ul>
                            <li>101 Fake Street</li>
                            <li>FakeMetropolis, FA</li>
                            <li>A1A 1A1</li>
                        </ul>
                    </ContactInfoSection>
                    <ConnectInfoSection>
                        <header>
                            <h3>Connect</h3>
                        </header>
                        <SocialMedia />
                    </ConnectInfoSection>
                    <ContactInfoSection>
                        <header>
                            <h3>Call Us</h3>
                        </header>
                        <ul>
                            <li>Delivery: (111) 111-1111</li>
                            <li>House: (111) 111-1112</li>
                        </ul>
                    </ContactInfoSection>
                </ContactInfo>
                <MapForm>
                    <Map />
                    <ContactForm />
                </MapForm>
            </Container>
        </Layout>
    );
};

export default Contact;
