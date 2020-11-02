import React from 'react';
import styled from 'styled-components';
import { COLOURS } from 'src/styling';
import FrownSVG from 'src/assets/svgs/frown.svg';
import Layout from 'src/components/Layout';
import { Link } from 'gatsby';

const Container = styled.div`
    display: grid;
    justify-items: center;
    grid-gap: 2rem;
    h1 {
        color: ${COLOURS.darkGrey};
    }
    p {
        max-width: 30rem;
        font-weight: 400;
    }
    a {
        color: ${COLOURS.darkBlue};
    }
    margin: 3rem 0;
`;

const error = () => {
    return (
        <Layout>
            <Container>
                <h1>Oops, something went wrong </h1>
                <FrownSVG />
                <p>
                    The page you tried couldn't be found. You may have typed in the
                    address incorrectly or used an outdated link. Navigate to a different
                    page or <Link to="/">click here</Link> to go back to the main page.
                </p>
            </Container>
        </Layout>
    );
};

export default error;
