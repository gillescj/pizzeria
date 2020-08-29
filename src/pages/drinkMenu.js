import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout';
import PageHeader from 'src/components/PageHeader';
import MenuSection from '../components/MenuSection';
import { drinkMenuList } from 'src/utils/menuLists';

const Container = styled.div`
    display: grid;
    grid-gap: 7rem;
    grid-template-columns: minmax(1rem, 70rem);
    justify-content: center;
    padding: 2rem 1rem;
`;

const renderedMenuSections = drinkMenuList.map((section) => {
    return (
        <MenuSection
            name={section.name}
            info={section.info}
            sectionItems={section.sectionItems}
        />
    );
});

const DrinkMenu = () => {
    return (
        <Layout padding="0" maxWidth="100%">
            <PageHeader pageName="Drink Menu" />
            <Container>{renderedMenuSections}</Container>
        </Layout>
    );
};

export default DrinkMenu;
