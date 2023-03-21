import styled from 'styled-components';
import CityList from '../components/city/CityList';
import PostingList from '../components/posting/PostingList';
import EventSwiper from '../components/swiper/EventSwiper';


const MainPage = () => {

    return (
        <MainContainer>
            <SwiperSection>
                {/* <EventSwiper /> */}
            </SwiperSection>
            <PostingSection>
                <CityList />
                <PostingList />
            </PostingSection>        
        </MainContainer>
    )
}

const MainContainer = styled.div`
    font-size: 3rem;
`

const SwiperSection = styled.div`
    
`

const PostingSection = styled.div`
    width: 1280px;
    margin: 0 auto;
    padding: 24px 0;

    @media screen and (max-width: 1300px){
        width: 960px;
    }

    @media screen and (max-width: 980px){
        width: 640px;
    }

    @media screen and (max-width: 575px){
        width: 100%;
    }
`



export default MainPage;