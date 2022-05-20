import React from 'react';
import Header from '../../shared/Header';
import Footer from "../../shared/Footer";
import Itinerary from '../Itinerary';

const ItineraryDetails = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', flex: 1, paddingBottom: 48 }}>
                <Itinerary /> 
            </div>
            <Footer />
        </div>
    );
};

export default ItineraryDetails;
