import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/modal/Modal';
import SwiperTest from '../components/swiper/SwiperTest';

const MainPage = () => {

    const [isOpen, setOpen] = useState(false);

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const handleClick = () => {
        setOpen(true);
    }

    return (
        <MainContainer>
            <SwiperTest />
            <button onClick={handleClick}>모달 열기</button>
            <Modal isOpen={isOpen}/>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    margin-top: 80px;
    font-size: 100px;
    /* height: 300px; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    color: lightgray;
`



export default MainPage;