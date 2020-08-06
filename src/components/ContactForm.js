import React from 'react';
import { COLOURS } from 'src/styling';
import styled from 'styled-components';

const Container = styled.div`
    background: white;
    display: grid;
    grid-gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 3px;
    border: 3px solid ${COLOURS.coral};
    box-shadow: 0 4px 20px hsla(0, 0%, 0%, 30%);
`;

const Input = styled.input`
    padding: 1rem;
    font-size: 1.2rem;
`;

const Textarea = styled.textarea`
    padding: 1rem;
    font-size: 1.2rem;
    height: 12rem;
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
`;

const ContactForm = () => {
    return (
        <Container>
            <Input name="NAME" placeholder="Name"></Input>
            <Input name="EMAIL" placeholder="Email"></Input>
            <Textarea name="MESSAGE" placeholder="Message"></Textarea>
            <Button>SEND</Button>
        </Container>
    );
};

export default ContactForm;
