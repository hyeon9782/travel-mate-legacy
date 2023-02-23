import { useState } from 'react';
import styled from 'styled-components';
import PostingList from '../components/posting/PostingList';
import CityList from '../components/city/CityList';
import SwiperTest from '../components/swiper/SwiperTest';

const MainPage = () => {

    return (
        <MainContainer>

            <SwiperBox>

            </SwiperBox>
            <CityList />
            <PostingList />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    width:  1200px;
    margin: 0 auto;
    padding: 0px 16px;
    /* box-sizing:content-box; */
    
`

const SwiperBox = styled.div`
    /* position: relative; */
    height: 400px;
    width: 100%;
    background: gray;

`



export default MainPage;