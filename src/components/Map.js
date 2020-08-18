import React from 'react';
import { COLOURS } from 'src/styling';
import styled from 'styled-components';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';

const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    background: white;
    padding: 0.25rem;
    border-radius: 3px;
    border: 3px solid ${COLOURS.coral};
    box-shadow: 0 4px 20px hsla(0, 0%, 0%, 30%);
`;

const position = [82.5057838, -62.5571833];

const Map = () => {
    return (
        <Container>
            <LeafletMap center={position} zoom={10} maxZoom={15} minZoom={3}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        Gatsby's Pizzeria
                        <br />
                        <br />
                        101 Fake Street
                        <br />
                        FakeMetropolis, FA
                        <br />
                        A1A 1A1
                    </Popup>
                </Marker>
            </LeafletMap>
        </Container>
    );
};

export default Map;
