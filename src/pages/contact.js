import React from 'react';
import { QUERIES, COLOURS } from 'src/styling';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import PageHeader from 'src/components/PageHeader';
import ContactForm from 'src/components/ContactForm';
import Map from 'src/components/Map';

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
    grid-template-columns: 1fr 1fr;
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
    width: 22rem;
    header {
        margin-bottom: 1rem;
        h3 {
            color: ${COLOURS.maroon};
            text-transform: uppercase;
            text-align: center;
            font-size: 2rem;
            padding-bottom: 1rem;
        }
    }
    li,
    div {
        font-size: 1.5rem;
        text-align: center;
    }
    @media (${QUERIES.medium}) {
        width: 100%;
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
    }
`;

const Contact = () => {
    return (
        <Layout padding="0" maxWidth="100%">
            <PageHeader pageName="Contact" />
            <Container>
                <TextDetails>
                    <p>
                        Green juice sartorial crucifix butcher ramps. Live-edge twee 90's
                        plaid bitters crucifix. Yuccie kitsch bitters meditation pitchfork
                        chartreuse lo-fi bicycle rights 8-bit synth hoodie slow-carb
                        coloring book marfa. Kitsch celiac normcore tacos.
                    </p>
                    <p>
                        DIY mixtape williamsburg beard, vape tote bag pop-up cornhole
                        viral. Wolf fashion axe single-origin coffee, banh mi glossier
                        microdosing lumbersexual woke chicharrones chia occupy lo-fi ennui
                        quinoa flannel.
                    </p>
                    <p>
                        Art party schlitz disrupt plaid. VHS bespoke put a bird on it man
                        braid 90's. Heirloom scenester tilde lumbersexual vexillologist
                        craft beer umami.
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
