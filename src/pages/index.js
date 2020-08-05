import React from 'react';
import { COLOURS, QUERIES } from 'src/styling';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

const getImages = graphql`
    {
        allFile(filter: { relativeDirectory: { eq: "main" } }) {
            nodes {
                name
                id
                childImageSharp {
                    fluid(maxWidth: 1600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;

const Container = styled.div`
    display: grid;
    grid-row-gap: 6rem;
    padding: 0 2%;
`;

const ImageContainer = styled.div`
    max-width: 80rem;
    border: solid 5px white;
    border-radius: 5px;
    box-shadow: 0 4px 20px hsla(0, 0%, 0%, 50%);
    @media (${QUERIES.medium}) {
        grid-row: 2;
    }
`;

const MainSection = styled.section`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: ${(props) =>
        props.direction === 'left' ? '2fr 3fr' : '3fr 2fr'};
    @media (${QUERIES.medium}) {
        grid-template-columns: 1fr;
    }
`;

const TextSection = styled.section`
    justify-self: center;
    align-self: center;
    h2 {
        font-size: 6rem;
        color: ${COLOURS.pink};
        padding-bottom: 2rem;
        justify-self: start;
    }
    p {
        max-width: 30rem;
    }
    @media (${QUERIES.large}) {
        h2 {
            font-size: 4rem;
        }
    }
    @media (${QUERIES.medium}) {
        grid-row: 1;
    }
`;

const Button = styled.button`
    background: ${COLOURS.pink};
    padding: 0.5rem;
    border: 3px solid ${COLOURS.coral};
    color: white;
    cursor: pointer;
    font-size: 1.25rem;
    width: 18rem;
    margin: 0 auto;
    display: block;
    a {
        color: inherit;
        text-decoration: inherit;
    }
    @media (${QUERIES.large}) {
        width: 15rem;
    }
`;

const Home = () => {
    const data = useStaticQuery(getImages);
    console.log(data);
    const {
        allFile: { nodes: images },
    } = data;
    console.log(images);

    return (
        <Layout>
            <Container>
                <MainSection direction="left">
                    <TextSection>
                        <h2>
                            have a<br />
                            slice
                        </h2>
                        <Button>
                            <Link to="menu">MENU</Link>
                        </Button>
                    </TextSection>
                    <ImageContainer>
                        <Img
                            fluid={
                                images.filter(
                                    (image) => image.name === 'pizza-birds-eye'
                                )[0].childImageSharp.fluid
                            }
                        />
                    </ImageContainer>
                </MainSection>
                <MainSection direction="right">
                    <ImageContainer>
                        <Img
                            fluid={
                                images.filter(
                                    (image) => image.name === 'pizzeria-table'
                                )[0].childImageSharp.fluid
                            }
                            sizes={{
                                ...images.filter(
                                    (image) => image.name === 'pizzeria-table'
                                )[0].childImageSharp.fluid,
                                aspectRatio: 16 / 9,
                            }}
                        />
                    </ImageContainer>
                    <TextSection>
                        <h2>
                            stay a<br />
                            while
                        </h2>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                            totam fugiat ex vero! Modi facilis soluta voluptas hic labore
                            quas consectetur repellat sequi corporis quod?
                        </p>
                    </TextSection>
                </MainSection>
                <MainSection direction="left">
                    <TextSection>
                        <h2>order out</h2>
                        <Button>
                            <Link to="delivery">DELIVERY</Link>
                        </Button>
                    </TextSection>
                    <ImageContainer>
                        <Img
                            fluid={
                                images.filter((image) => image.name === 'pizza-box')[0]
                                    .childImageSharp.fluid
                            }
                        />
                    </ImageContainer>
                </MainSection>
            </Container>
        </Layout>
    );
};

export default Home;
