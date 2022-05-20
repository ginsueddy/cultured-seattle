import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context as UserContext } from '../../../context/UserContext';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { useContext } from 'react';

const HighlightedHeader = styled.h1`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 97%;
    letter-spacing: -2px;
    color: #000000
`;

const Text = styled.p`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
`;

const ButtonText = styled.div`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    color: #3E372D;
`;


const Header = ({ isLanding }) => {
    const { state: { user }} = useContext(UserContext);
    const { height, width } = useWindowDimensions();

    return (
        <div style={{ width, height: height * .15, paddingLeft: '5%', paddingRight: '3%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <HighlightedHeader style={{ fontSize: 36 }}>cultured</HighlightedHeader>
                    <HighlightedHeader style={{ fontSize: 36, marginTop: -20 }}>// seattle</HighlightedHeader>
                </Link>
                {
                    isLanding && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', width: '18%', justifyContent: 'space-between' }}>
                                {
                                    width > 720 && (
                                        <>
                                            {/* <Text style={{ fontSize: 14, paddingLeft: 16, paddingRight: 16 }}>ABOUT</Text> */}
                                            <Link to={user ? '/account' : '/login'} style={{ textDecoration: 'none' }}>
                                                <div style={{ borderWidth: '1.5px', borderStyle: 'solid', borderColor: '#C7CBC7', backgroundColor: 'white', marginLeft: 16, marginRight: 24, paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, borderRadius: 30, display: 'flex', alignItems: 'center' }}>
                                                    <ButtonText>{user ? 'ACCOUNT' : 'LOGIN'}</ButtonText>
                                                </div>
                                            </Link>
                                        </>
                                    )
                                }
                                <Link to="/logistics" style={{ textDecoration: 'none' }}>
                                    <div style={{ backgroundColor: '#DEC6AF', paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, borderRadius: 30, display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                                        <ButtonText style={{ color: 'white' }}>EXPLORE NOW</ButtonText>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Header;
