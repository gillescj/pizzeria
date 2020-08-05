import React from 'react';
import { QUERIES, COLOURS } from 'src/styling';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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
        <Layout>
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
                            I'm baby coloring book 8-bit tacos fanny pack hella DIY
                            ethical thundercats seitan actually VHS truffaut leggings
                            beard small batch. Roof party flannel intelligentsia fashion
                            axe +1 gastropub. Gochujang pug quinoa vaporware narwhal
                            keffiyeh four loko kogi tote bag. Cornhole tbh flannel fam.
                            Retro dreamcatcher locavore letterpress stumptown shaman
                            sartorial pitchfork. Lyft kogi bushwick iPhone cray artisan.
                            Stumptown cornhole marfa drinking vinegar +1 street art 3 wolf
                            moon you probably haven't heard of them everyday carry
                            gentrify brunch freegan bushwick before they sold out
                            adaptogen.
                        </p>
                        <p>
                            Blue bottle banh mi leggings blog. Prism kogi chartreuse
                            sustainable normcore. Yuccie tousled fanny pack subway tile,
                            air plant lyft tattooed disrupt gentrify fingerstache photo
                            booth shabby chic gochujang hot chicken mumblecore.
                            Asymmetrical tacos jean shorts listicle butcher williamsburg
                            direct trade.
                        </p>
                    </TextSection>
                </Wrapper>
            </Container>
        </Layout>
    );
};

export default About;
