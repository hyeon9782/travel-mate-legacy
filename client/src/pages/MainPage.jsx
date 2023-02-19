import { useState } from 'react';
import styled from 'styled-components';
import AreaList from '../components/area/AreaList';
import BulletinList from '../components/bulletin/BulletinList';
import SwiperTest from '../components/swiper/SwiperTest';

const MainPage = () => {

    return (
        <MainContainer>
            {/* <SwiperTest /> */}
            <AreaList />
            <BulletinList />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    font-size: 3rem;
`



export default MainPage;