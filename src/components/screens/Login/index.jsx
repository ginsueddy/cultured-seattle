import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Context as UserContext } from '../../../context/UserContext';
import { firebaseApp } from '../../../config';
import { setIdToken } from '../../../utils/request';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import './styles.css';

const HeaderText = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 1px;
    color: #000000;
`;

const Label = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 1px;
    color: #000000;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { setCurrentUserFromFirebase } = useContext(UserContext);

    const signInUser = () => {
        const auth = getAuth(firebaseApp);

        signInWithEmailAndPassword(auth, email, password).then((firebaseUser) => {
            console.log(firebaseUser);
            setIdToken(firebaseUser.user.getIdToken());
            setCurrentUserFromFirebase(firebaseUser);
        }).then(() => {
            navigate('/');
        }).catch((e) => {
            console.log('invalid sign in');
            alert(e);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signInUser();
    }

    return (
        <>
            <Header isLanding />
            <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <HeaderText style={{ marginBottom: 60 }}>Login</HeaderText>
                <Label>
                    Email
                </Label>
                <label class="custom-field">
                    <input id="email-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: email.length > 0 ? '#5DA27D' : '#C7CBC7'}} />
                </label>
                <Label style={{ marginTop: 40 }}>
                    Password
                </Label>
                <label class="custom-field">
                    <input id="password-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: password.length > 0 ? '#5DA27D' : '#C7CBC7'}} />
                </label>
                <div onClick={handleSubmit} style={{ backgroundColor: '#5DA27D', paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, borderRadius: 30, alignItems: 'center', marginTop: 40 }}>
                    <Label style={{ color: 'white', fontWeight: 400, fontSize: 24 }}>SUBMIT</Label>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
