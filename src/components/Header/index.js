import React from 'react';
import { Container, Wrapper, MiddleBanner } from './styles';
import Navigation from 'src/components/Navigation';
import MobileNavigation from 'src/components/MobileNavigation';

const Header = () => {
    return (
        <Container>
            <MiddleBanner />
            <Wrapper>
                <MobileNavigation />
                <Navigation />
            </Wrapper>
        </Container>
    );
};

export default Header;
