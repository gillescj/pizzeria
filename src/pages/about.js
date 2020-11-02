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
    display: grid;
    @media (${QUERIES.medium}) {
        padding: 0 5rem;
    }
    @media (${QUERIES.small}) {
        padding: 0;
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
    @media (${QUERIES.small}) {
        padding: 0;
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
                            Our story begins with our beloved great grandfather and his
                            simple homegrown recipes.
                        </p>
                        <p>
                            At Gatsby's Pizzeria, we know that pizza isn't just the
                            combination of pizza dough, tomato sauce and cheese. We take
                            our pizza very seriously using our decades-old secret family
                            hand-pulled sourdough crust recipe, topped with our slow
                            roasted san marzano tomatoes and fresh basil sauce and topped
                            with housemade fresh ooey-gooey mozzarella and the freshest
                            locally sourced toppings you can find.
                        </p>
                        <p>
                            Come for our pizza and stay for the warm and welcoming
                            atmosphere or take the taste of Gatsby's home with our
                            extended take-out menu.
                        </p>
                    </TextSection>
                </Wrapper>
            </Container>
        </Layout>
    );
};

export default About;
