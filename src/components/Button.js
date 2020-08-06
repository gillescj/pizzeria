import React from 'react';
import { COLOURS } from 'src/styling';
import styled from 'styled-components';

const Container = styled.button`
    position: relative;
    background: ${COLOURS.pink};
    padding: 0.5rem;
    border: 3px solid ${COLOURS.coral};
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.25rem;
    width: 100%;
    margin: 0 auto;
    display: block;

    a {
        color: inherit;
        text-decoration: inherit;
    }
    &::before {
        content: '';
        width: 20px;
        height: 20px;
        border-top: 3px solid ${COLOURS.pink};
        border-left: 3px solid ${COLOURS.pink};
        position: absolute;
        top: -5px;
        left: -5px;
        transition: all 0.3s ease;
    }
    &::after {
        content: '';
        width: 20px;
        height: 20px;
        border-bottom: 3px solid ${COLOURS.pink};
        border-right: 3px solid ${COLOURS.pink};
        position: absolute;
        bottom: -5px;
        right: -5px;
        transition: all 0.3s ease;
    }
    &:hover {
        &::before {
            width: 70%;
            height: 70%;
            transition: all 0.3s ease;
        }
        &::after {
            width: 70%;
            height: 70%;
            transition: all 0.3s ease;
        }
    }
`;

const Button = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Button;
