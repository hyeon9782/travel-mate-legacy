import styled from 'styled-components';
import MapTest from '../components/google/MapTest';


const MainPage = () => {

    const containerStyle = {
        width: '400px',
        height: '400px'
    };
    return (
        <MainContainer>
            <MapTest mapLocation="" containerStyle={containerStyle}/>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    font-size: 100px;
    height: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightgray;
`



export default MainPage;