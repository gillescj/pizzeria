import React from 'react';
import { QUERIES, COLOURS } from 'src/styling';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PageHeader from 'src/components/PageHeader';

const getImages = graphql`
    {
        chalk: file(relativePath: { eq: "pizza-chalk.jpg" }) {
            name
            id
            childImageSharp {
                fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
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

const Wrapper = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    @media (${QUERIES.medium}) {
        grid-template-columns: 1fr;
    }
`;

const ImageContainer = styled.div`
    align-self: center;
    @media (${QUERIES.medium}) {
        padding: 0 5rem;
    }
`;

const TextSection = styled.section`
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;
    h2 {
        font-size: 4rem;
        color: ${COLOURS.textMain};
        padding-bottom: 2rem;
        text-align: center;
    }
    p {
        max-width: 30rem;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    @media (${QUERIES.medium}) {
        padding: 0 5rem;
        padding-top: 1rem;
    }
`;

const About = () => {
    const data = useStaticQuery(getImages);
    return (
        <Layout padding="0" maxWidth="100%">
            <PageHeader pageName="About" />
            <Container>
                <Wrapper>
                    <ImageContainer>
                        <Img
                            fluid={data.chalk.childImageSharp.fluid}
                            sizes={{
                                ...data.chalk.childImageSharp.fluid,
                                aspectRatio: 10 / 12,
                            }}
                            alt="Pizzeria indoor seating"
                            objectFit="contain"
                        />
                    </ImageContainer>
                    <TextSection>
                        <h2>Our Story</h2>
                        <p>
                            Facere consequatur sit praesentium. Saepe aliquam deserunt
                            veniam ex. Ut repellendus ut repellendus harum ipsam sed
                            velit. Velit non tempora rerum pariatur quis sint. Quo
                            consequuntur laborum expedita in sunt vero. Rerum quam in ut
                            dolores magni reiciendis. Enim necessitatibus expedita quod
                            illum vitae et nesciunt est. Voluptas odit assumenda eligendi.
                            Ullam et consectetur perferendis qui accusamus et. Voluptatem
                            cumque facilis hic sit quasi rerum ut delectus. Quisquam
                            nesciunt eos soluta odit in quam tenetur. Illo reiciendis
                            beatae excepturi. Itaque ea aperiam porro velit culpa
                            voluptatem. Cum iure culpa minus nostrum sed rerum. Voluptas
                            officiis dolorem quis hic dolorem nostrum.
                        </p>
                        <p>
                            Et eaque fugit quas qui autem ut dicta amet. Sunt asperiores
                            eum et ut porro qui. Fugiat ut deserunt sed fugiat eveniet. Et
                            expedita qui aut et sit accusantium excepturi eius. Et
                            corrupti omnis inventore fugit. Est est adipisci qui impedit
                            nisi excepturi.
                        </p>
                    </TextSection>
                </Wrapper>
            </Container>
        </Layout>
    );
};

export default About;
