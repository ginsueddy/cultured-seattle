import React, { useState } from 'react';
import styled from "styled-components";
import { ChevronLeft } from '@styled-icons/feather';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Footer from "../../shared/Footer";

const Header1 = styled.div`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 109%;
    letter-spacing: -2px;
    color: #232323;
`;

const Header2 = styled.div`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    color: #232323;
`;

const Text = styled.div`
    font-family: 'Outfit', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: 1px;
    color: #000000;
`;

const TimeSlot = ({ time, setTime, selectedTime }) => {
    return (
        <div onClick={() => setTime(time)} style={{ borderWidth: '1.5px', borderStyle: 'solid', borderColor: '#C7CBC7', backgroundColor: selectedTime === time ? 'rgba(93, 162, 125, 0.3)' : 'white', paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4, borderRadius: 30 }}>
            <Header2>{time}</Header2>
        </div>
    );
};

const Booking = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const [bookingStep, setBookingStep] = useState(0);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [inviteList, setInviteList] = useState('');

    const renderStep = () => {
        switch (bookingStep) {
            case 0:
                return (
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }}>
                            <Calendar value={date} onChange={setDate} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <Header2>SHOWROOM BOOKING</Header2>
                            <Header1>When are you free?</Header1>
                            {
                                !date ? (
                                    <Text>Choose a day for your showroom</Text>
                                ) : (
                                    <>
                                        <Text>Select your showroom timeslot</Text>
                                        <div style={{ display: 'flex' }}>
                                            <TimeSlot time="10:00 AM" setTime={setTime} selectedTime={time} />
                                            <div style={{ width: 16 }} />
                                            <TimeSlot time="1:00 PM" setTime={setTime} selectedTime={time} />
                                            <div style={{ width: 16 }}/>
                                            <TimeSlot time="4:00 PM" setTime={setTime} selectedTime={time} />
                                            <div style={{ width: 16 }}/>
                                            <TimeSlot time="7:00 PM" setTime={setTime} selectedTime={time} />
                                        </div>
                                        <div onClick={() => {
                                            if (time) {
                                                setBookingStep(1);
                                            }
                                        }} style={{ backgroundColor: time ? '#E69C57' : '#C7CBC7', paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4, borderRadius: 30 }}>
                                            <Header2 style={{ color: '#FFFFFF' }}>CONTINUE</Header2>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                );
            case 1: 
                return (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => setBookingStep(0)}>
                                <ChevronLeft size={24} title="Go back" />
                                <Text>Return to booking</Text>
                            </div>
                            <Text>{`${moment(date).format('MMMM Do YYYY,')} ${time}`}</Text>
                        </div>
                        <form>
                            <Header2>ACCOUNT INFORMATION</Header2>
                            <div>
                                <label>
                                    First Name
                                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </label>
                                <label>
                                    Last Name
                                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email address
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>
                                <label>
                                    Phone number
                                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Create a password
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </label>
                                <label>
                                    Re-enter password
                                    <input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                </label>
                            </div>
                            <Header2>INVITE YOUR FRIENDS</Header2>
                            <label>
                                Enter up to 9 emails, separated by commas (ex. trinity@gmail.com, cindy@yahoo.com)
                                <input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <>
            {renderStep()}
            <Footer />
        </>
    );
};

export default Booking;
