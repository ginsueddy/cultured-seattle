import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const HighlightedHeader = styled.div`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    letter-spacing: -1px;
    color: #FFFFFF;
`;

const Text = styled.div`
    font-family: 'Outfit', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 1px;
    color: #FFFFFF;
`;

const Footer = () => {
    const { height, width } = useWindowDimensions();

    return (
        <div style={{ width, height: height * .2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ width, height: height * .3, background: "linear-gradient(180deg, #FFFFFF, #5DA27D 60%)", position: 'absolute', zIndex: -1 }} />
            <div style={{ paddingLeft: '5%', paddingRight: '3%', paddingBottom: 20 }}>
                <HighlightedHeader style={{ fontSize: 36 }}>cultured // seattle</HighlightedHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                        <Text style={{ marginRight: 16 }}>Contact Us</Text>
                        <Text style={{ marginRight: 16 }}>FAQ</Text>
                        <Text style={{ marginRight: 16 }}>Instagram</Text>
                    </div>
                    {
                        width > 800 && (
                            <Text style={{ flex: 1 }}>Designed in Seattle, WA</Text>
                        )
                    }
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ marginRight: 16, marginLeft: 16 }}>Privacy - Terms</Text>
                        <Text>&copy; 2022</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
