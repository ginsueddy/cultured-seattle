import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Context as UserContext } from '../../../context/UserContext';
import Header from '../../shared/Header';
import Footer from "../../shared/Footer";
import LoadingSpinner from '../../shared/LoadingSpinner';
import QuizCalendar from '../../shared/QuizCalendar';
import Itinerary from '../Itinerary';

const logisticsQuiz = [
    {
        question: 'Where are you going?',
        responseType: 'select',
        stage: 'eventDetails',
        options: ['University District', 'Capitol Hill', 'Ballard', 'Fremont', 'International District', 'I don\'t know yet']
    },
    {
        question: 'What day are you going?',
        responseType: 'calendar',
        stage: 'eventDetails'
    },
    {
        question: 'What time are you going?',
        responseType: 'select',
        stage: 'eventDetails',
        options: ['Morning (8am-12pm)', 'Day (12pm-4pm)', 'Evening (4pm-8pm)', 'Late Night (8pm-12am)', 'I don\'t know yet']
    },
    {
        question: 'What\'s your budget?',
        responseType: 'select',
        stage: 'eventDetails',
        options: ['N/A', '$', '$$', '$$$', '$$$$', 'I don\'t know yet']
    },
    // {
    //     question: 'Is everyone in your group 21+?',
    //     responseType: 'select',
    //     stage: 'eventDetails',
    //     options: ['Yes', 'No', 'I\'m not interested in 21+ activities']
    // },
    {
        question: 'You\'re almost there!',
        responseType: 'summary',
        stage: 'eventDetails'
    },
    // {
    //     question: 'Will you be spending time with friends or planning for something solo?',
    //     responseType: 'select',
    //     stage: 'preferences',
    //     options: ['I have a large group to plan for', 'Just for a couple of friends', 'Something to do by myself']
    // },
    {
        question: 'How active are you?',
        responseType: 'select',
        stage: 'preferences',
        options: ['I\'m always outdoors', 'It depends on the day', 'I\'m active with friends', 'I prefer to stay in']
    },
    {
        question: 'What\'s your favorite way to spend free time?',
        responseType: 'select',
        stage: 'preferences',
        options: ['Trying a new restaurant', 'See what\'s new on Netflix', 'Reading a good book', 'Spending time outside', 'Something else']
    },
    // {
    //     question: 'What\'s your sign?',
    //     responseType: 'select',
    //     stage: 'preferences',
    //     options: ['Aries', 'Libra', 'Aquarius', 'Scorpio', 'Taurus', 'Capricorn', 'Gemini', 'Virgo', 'Cancer', 'Saggitarius', 'I don\'t know']
    // },
    {
        question: 'What genre of music do you listen to?',
        responseType: 'select',
        stage: 'preferences',
        options: ['Pop // Top 50', 'Country Pop', 'EDM', 'HipHop // Rap', 'Something else']
    },
    {
        question: 'Hang tight! We\'re making your plans',
        responseType: 'summary',
        stage: 'itinerary'
    }
];

const HeaderText = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    letter-spacing: 1px;
`;

const Text = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    text-align: center;
    letter-spacing: 1px;
`;

const ButtonText = styled.div`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
`;


const QuizOption = ({ text, onClick }) => {
    const [hovered, setHoverd] = useState(false);

    return (
        <div
            style={{ 
                border: '1.5px solid #5DA27D',
                backgroundColor: hovered ? '#5DA27D' : 'white',
                borderRadius: 20,
                width: '25em',
                height: '3em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 24,
                cursor: 'pointer'
            }}
            onMouseEnter={() => setHoverd(true)}
            onMouseLeave={() => setHoverd(false)}
            onClick={onClick}
        >
            <Text style={{ color: hovered ? 'white' : 'black' }}>{text}</Text>
        </div>
    );
};

const Logistics = () => {
    const { state: { user }} = useContext(UserContext);

    const [index, setIndex] = useState(0);
    const [showItinerary, setShowItinerary] = useState(false);
    const [quizResponse, setQuizResponses] = useState([]);

    const [date, setDate] = useState(null);

    useEffect(() => {
        if (index === logisticsQuiz.length - 1) {
            setTimeout(() => {
                setShowItinerary(true);
            }, 3000)
        }

    }, [index]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', flex: 1, paddingBottom: 48 }}>
                {
                    showItinerary ? <Itinerary /> : (
                        <div>
                            <div style={{ display: 'flex', marginBottom: 48 }}>
                                <Text style={{ fontSize: 20, fontWeight: logisticsQuiz[index].stage === 'eventDetails' ? 'bold' : 'normal' }}>1. Event Details</Text>
                                <Text style={{ fontSize: 20, fontWeight: logisticsQuiz[index].stage === 'preferences' ? 'bold' : 'normal', marginLeft: '7.5rem', marginRight: '7.5rem' }}>2. Preferences</Text>
                                <Text style={{ fontSize: 20, fontWeight: logisticsQuiz[index].stage === 'itinerary' ? 'bold' : 'normal' }}>3. Your Custom Itinerary</Text>
                            </div>
                            <HeaderText>{logisticsQuiz[index].question}</HeaderText>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 32, paddingBottom: 32 }}>
                                {
                                    logisticsQuiz[index].options && (
                                        <div style={{ marginTop: 16 }}>
                                            {
                                                logisticsQuiz[index].options.map((option) => <QuizOption text={option} onClick={() => {
                                                    setQuizResponses([ ...quizResponse, option]);
                                                    setIndex(index + 1);
                                                }} />)
                                            }
                                        </div>
                                    )
                                }
                                {
                                    (logisticsQuiz[index].responseType === 'calendar') && <QuizCalendar value={date} onChange={(date) => {
                                        setQuizResponses([ ...quizResponse, date]);
                                        setIndex(index + 1);
                                    }} />
                                }
                                {
                                    (logisticsQuiz[index].responseType === 'summary' && logisticsQuiz[index].stage === 'eventDetails') && (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
                                            <Text style={{ fontWeight: 200, maxWidth: 750 }}>{quizResponse[0]}, {moment(quizResponse[1]).format('dddd MMM Do')}, {quizResponse[2].substring(quizResponse[2].indexOf(' ') + 2, quizResponse[2].length -1)}, {quizResponse[3]} Budget</Text>
                                            <Text style={{ fontWeight: 300, marginTop: 40, marginBottom: 40, maxWidth: 750 }}>Now that we've got your logistics down, we'll ask you a couple questions about your preferences and what you like to do for fun!</Text>
                                            <QuizOption text="Let's do it" onClick={() => setIndex(index + 1)} />
                                        </div>
                                    )
                                }
                                {
                                    (logisticsQuiz[index].responseType === 'summary' && logisticsQuiz[index].stage === 'itinerary') && (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
                                            <Text style={{ fontWeight: 300, marginTop: 80, marginBottom: 80, maxWidth: 750 }}>Thanks for answering our questions! Sit back while we put together your custom itinerary.</Text>
                                            <LoadingSpinner />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    );
};
// party.js
export default Logistics;
