import React, { useState } from 'react';
import styled from "styled-components";
import { ChevronLeft } from '@styled-icons/feather';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header';
import Footer from "../../shared/Footer";

const HeaderText = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.1em;
    color: #232323
`;

const Label = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 1px;
    color: #000000;
`;

const ButtonText = styled.div`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    letter-spacing: 1px;
    color: #3E372D;
`;

const BackButtonText = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1px;
    color: #5C5C5C;
`;

export const AccountCreationForm = ({ setShowAccountCreation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    return (
        <div style={{ paddingLeft: 100, paddingTop: 54, paddingRight: 100 }}>
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: 30, marginBottom: 40 }} onClick={() => setShowAccountCreation(false)}>
                <ChevronLeft size={24} title="Go back" />
                <BackButtonText>Return to itineary</BackButtonText>
            </div>
            <HeaderText style={{ marginLeft: 35, marginBottom: 32 }}>Create an account to save your itinerary</HeaderText>
            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 1000 }}>
                <div style={{ marginRight: 35, marginLeft: 35, marginBottom: 24 }}>
                    <Label>
                        First name *
                    </Label>
                    <label class="custom-field">
                        <input id="first-name-field" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ borderColor: firstName.length > 0 ? '#5DA27D' : '#C7CBC7'}} />
                    </label>
                </div>
                <div style={{ marginRight: 35, marginLeft: 35, marginBottom: 24 }}>
                    <Label>
                        Last name *
                    </Label>
                    <label class="custom-field">
                        <input id="email-field" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ borderColor: lastName.length > 0 ? '#5DA27D' : '#C7CBC7'}} />
                    </label>
                </div>
                <div style={{ marginRight: 35, marginLeft: 35, marginBottom: 24 }}>
                    <Label>
                        Email address *
                    </Label>
                    <label class="custom-field">
                        <input id="email-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: email.length > 0 ? '#5DA27D' : '#C7CBC7'}} />
                    </label>
                </div>
                <div style={{ marginRight: 35, marginLeft: 35, marginBottom: 24 }}>
                    <Label>
                        Phone number
                    </Label>
                    <label class="custom-field">
                        <input id="email-field" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ borderColor: phoneNumber.length > 0 ? '#5DA27D' : '#C7CBC7'}} />
                    </label>
                </div>
                <div style={{ marginRight: 35, marginLeft: 35, marginBottom: 24 }}>
                    <Label>
                        Create a password *
                    </Label>
                    <label class="custom-field">
                        <input id="password-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: password.length > 0 ? '#5DA27D' : '#C7CBC7'}} />
                    </label>
                </div>
                <div style={{ marginRight: 35, marginLeft: 35, marginBottom: 24 }}>
                    <Label>
                        Re-enter password *
                    </Label>
                    <label class="custom-field">
                        <input id="email-field" type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} style={{ borderColor: rePassword.length > 0 ? '#5DA27D' : '#C7CBC7'}} />
                    </label>
                </div>
            </div>
            <div onClick={() => console.log()} style={{ backgroundColor: '#E69C57', paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, borderRadius: 30, alignItems: 'center', alignSelf: 'baseline', marginTop: 16, width: 200, marginLeft: 35 }}>
                <ButtonText style={{ color: 'white' }}>CONFIRM</ButtonText>
            </div>
        </div>
    );
};

const AccountCreation = ({  }) => {
    return (
        <>
            <Header />
                <AccountCreationForm />
            <Footer />
        </>
    );
};

export default AccountCreation;
