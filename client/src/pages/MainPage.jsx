import { useState } from 'react';
import styled from 'styled-components';
import PostingList from '../components/posting/PostingList';
import CityList from '../components/city/CityList';
import SwiperTest from '../components/swiper/SwiperTest';

const MainPage = () => {

    return (
        <MainContainer>
            {/* <SwiperTest /> */}
            <CityList />
            <PostingList />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    font-size: 3rem;
`



export default MainPage;