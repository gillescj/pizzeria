import React from 'react';
import { QUERIES, COLOURS } from 'src/styling';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from 'src/components/Layout';
import PageHeader from 'src/components/PageHeader';
import Img from 'gatsby-image';

const getImages = graphql`
    {
        file(relativePath: { eq: "uber-eats-logo.png" }) {
            name
            id
            childImageSharp {
                fixed(width: 320) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
    justify-content: center;
    padding: 2rem 1rem;
`;

const TextInfo = styled.section`
    max-width: 50rem;
    margin: 0 auto;
    font-size: 1.2rem;
    padding-bottom: 3rem;
    h2 {
        padding-bottom: 1rem;
        font-size: 2rem;
        color: ${COLOURS.pink};
    }
    p {
        padding-bottom: 2rem;
    }
    ul {
        padding-bottom: 2rem;
        li {
            list-style: inside;
        }
    }
`;

const ImageContainer = styled.div`
    justify-self: center;
    cursor: pointer;
`;

const Delivery = () => {
    const data = useStaticQuery(getImages);
    return (
        <Layout padding="0" maxWidth="100%">
            <PageHeader pageName="Delivery" />
            <Container>
                <TextInfo>
                    <h2>Delivery Update</h2>
                    <p>
                        Aut molestias maxime veritatis qui autem commodi quia dolorum.
                        Nihil et dolorem sit. Illo ut voluptatem vero consequuntur nobis.
                    </p>
                    <h2>How it Works</h2>
                    <p>
                        Ut dolor ad earum est recusandae. Quis illo natus sapiente
                        repellat consequuntur nesciunt. Incidunt iure sint ut sed repellat
                        optio. Dicta cumque neque eum fugit est in dolore similique.
                    </p>
                    <h2>Where we Serve</h2>
                    <ul>
                        <li>London</li>
                        <li>Paris</li>
                        <li>Singapore</li>
                        <li>Miami</li>
                        <li>Toronto</li>
                        <li>Moscow</li>
                        <li>Dublin</li>
                        <li>Vancouver</li>
                        <li>Athens</li>
                        <li>Berlin</li>
                        <li>Stockholm</li>
                        <li>Oslo</li>
                    </ul>
                    <h2>Special Orders</h2>
                    <p>
                        Id sunt quis sit ratione. Laborum quisquam ducimus temporibus rem
                        tenetur praesentium ea. Deleniti quidem sit aut non. Quam delectus
                        impedit quaerat inventore sit explicabo iste voluptatem. Est
                        commodi illo quis recusandae reiciendis exercitationem dolores
                        quibusdam.
                    </p>
                </TextInfo>
                <ImageContainer>
                    <Img fixed={data.file.childImageSharp.fixed} alt="Uber Eats Logo" />
                </ImageContainer>
            </Container>
        </Layout>
    );
};

export default Delivery;
