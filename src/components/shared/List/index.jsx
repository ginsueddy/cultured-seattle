import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Text = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1px;
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


const List = ({ listItems, isItinerary, onClickSavePlans }) => {
    const { height, width } = useWindowDimensions();
    
    if (isItinerary) {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ width: 12, alignItems: 'center', display: 'flex', flexDirection: 'column', paddingTop: 12 }}>
                    {
                        listItems.map((item, index) => {
                            return (
                                <>
                                    <div style={{ width: 12, height: 12, backgroundColor: '#5DA27D', borderRadius: 6 }} />
                                    <div style={{ width: 1, height: index === listItems.length - 1 ? 224 : 174, backgroundColor: 'black' }} />
                                </>
                            )
                        })
                    }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }}>
                    {
                        listItems.map((item, index) => (
                            <>
                                <Text>{item.stop}</Text>
                                <Text style={{ fontWeight: 'bold', marginTop: 8 }}>{item.name}</Text>
                                <Text>{item.address}</Text>
                                <div onClick={() => console.log()} style={{ backgroundColor: '#5DA27D', paddingLeft: 16, paddingRight: 16, paddingTop: 4, paddingBottom: 4, borderRadius: 30, display: 'flex', alignItems: 'center', alignSelf: 'baseline', marginTop: 16, marginBottom: 40 }}>
                                    <ButtonText style={{ color: 'white' }}>VISIT</ButtonText>
                                </div>
                            </>
                        ))
                    }
                    <div style={{ display: 'flex' }}>
                        <div onClick={onClickSavePlans} style={{ cursor: 'pointer', backgroundColor: '#E69C57', paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, borderRadius: 30, alignItems: 'center', alignSelf: 'baseline', marginTop: 16 }}>
                            <ButtonText style={{ color: 'white' }}>SAVE PLANS</ButtonText>
                        </div>
                        <div style={{ flexDirection: 'column', display: 'flex', marginLeft: 24 }}>
                            <Text style={{ fontSize: 18 }}>Don't like this?</Text>
                            <Text style={{ fontSize: 18 }}><u>Get a new plan</u> or <u style={{ cursor: 'pointer' }} onClick={() => window.location.reload()}>start over.</u></Text>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: 12, alignItems: 'center', display: 'flex', flexDirection: 'column', paddingTop: 12 }}>
                {
                    listItems.map((item, index) => {
                        return (
                            <>
                                <div style={{ width: 12, height: 12, backgroundColor: '#E69C57', borderRadius: 6 }} />
                                {
                                    index !== listItems.length - 1 && (
                                        <div style={{ width: 1, height: 48, backgroundColor: 'black' }} />
                                    )
                                }
                            </>
                        )
                    })
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }}>
                {
                    listItems.map((item, index) => <Text style={{ marginBottom: index === listItems.length - 1 ? 0 : 28}}>{item}</Text>)
                }
            </div>
        </div>
    );
};

export default List;
