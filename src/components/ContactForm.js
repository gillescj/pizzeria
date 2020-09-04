import React from 'react';
import { COLOURS } from 'src/styling';
import styled from 'styled-components';
import Button from 'src/components/Button';

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
    width: 100%;
`;

const Textarea = styled.textarea`
    padding: 1rem;
    font-size: 1.2rem;
    height: 12rem;
    resize: none;
    width: 100%;
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
