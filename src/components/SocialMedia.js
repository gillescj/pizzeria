import React from 'react';
import { COLOURS } from 'src/styling';
import styled from 'styled-components';
import InstagramSVG from 'src/assets/svgs/instagram.svg';
import FacebookSVG from 'src/assets/svgs/facebook.svg';
import TwitterSVG from 'src/assets/svgs/twitter.svg';

const Container = styled.div`
    display: flex;
`;

const SVGContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
        margin-right: 0.75rem;
        width: 35px;
        height: 35px;
        color: ${COLOURS.textBright};
        transition: color 400ms;
    }
    &:hover {
        svg {
            color: ${COLOURS.pink};
        }
    }
`;

const SocialMedia = () => {
    return (
        <Container>
            <SVGContainer>
                <InstagramSVG />
            </SVGContainer>
            <SVGContainer>
                <FacebookSVG />
            </SVGContainer>
            <SVGContainer>
                <TwitterSVG />
            </SVGContainer>
        </Container>
    );
};

export default SocialMedia;
