import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Context as UserContext } from '../../../context/UserContext';
import List from '../../shared/List';
import elImage from '../../../assets/el.png';
import vinImage from '../../../assets/vin.png';
import livImage from '../../../assets/liv.png';
import { AccountCreationForm } from '../AccountCreation';

const Header = styled.div`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 32px;
    letter-spacing: 1px;
    color: #5DA27D;
`;

const Text = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 24px;
    letter-spacing: 1px;
    color: #000000;
`;

const Itinerary = ({  }) => {
    const { height, width } = useWindowDimensions();
    const navigate = useNavigate();

    const { state: { user }} = useContext(UserContext);

    const [showAccountCreation, setShowAccountCreation] = useState(false);

    const onClickSavePlans = () => {
        if (user) {
            navigate('/account');
        } else {
            setShowAccountCreation(true);
        }
    }

    if (showAccountCreation) {
        return <AccountCreationForm setShowAccountCreation={setShowAccountCreation} />;
    }

    return (    
        <div style={{ display: 'flex' }}>
            <div style={{ paddingLeft: width * 0.05 }}>
                <Header style={{ marginBottom: 16 }}>Your Itinerary</Header>
                <Text style={{ fontWeight: 500, fontSize: 22 }}>Wednesday, April 6th from 4pm - 8pm</Text>
                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 600, justifyContent: 'center', maxWidth: 600 }}>
                    <img style={{ width: 250, height: 250, marginBottom: 40 }} src={elImage} alt="el camino" />
                    <img style={{ width: 250, height: 250, marginBottom: 40 }} src={vinImage} alt="fremont vintage mall" />
                    <img style={{ width: 250, height: 250 }} src={livImage} alt="olvia rodrigo" />
                </div>
            </div>
            <div style={{ marginLeft: 200 }}>
                <List
                    listItems={[
                        {
                            stop: 'First stop',
                            name: 'El Camino',
                            address: '607 N 35th St. Seattle, WA 98103',
                        },
                        {
                            stop: 'Second stop',
                            name: 'Fremont Vintage Mall',
                            address: '3419 Fremont Ave N, Seattle, WA 98103',
                        },
                        {
                            stop: 'Third stop',
                            name: 'Olivia Rodrigo Concert @ WAMU',
                            address: '800 Occidental Ave S, Seattle, WA 98134',
                        },
                    ]}
                    isItinerary
                    onClickSavePlans={onClickSavePlans}
                />
            </div>
        </div>
    );
};

export default Itinerary;
