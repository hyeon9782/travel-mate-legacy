import styled from 'styled-components';
import { useEffect } from 'react';
import PlaceItem from './PlaceItem';
import { useRecoilState } from 'recoil';
import { placeState } from '../../store/placeState';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getPlace } from '../../apis/place';

const PlaceList = () => {
    const [ placeList, setPlaceList ] = useRecoilState(placeState);

    const fetchData = async () => {
        const res = await getPlace();
        
        setPlaceList(res.data.place);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PlaceContainer>
            <Swiper
                spaceBetween={10}
                slidesPerView={ placeList.length < 8 ? placeList.length : 8 }
            >
                {placeList.map((place) => {
                    return (
                        <SwiperSlide key={place.id}>
                            <PlaceItem item={place}  />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            {/* {placeList.map((place) => {
                return (
                    <PlaceItem item={place} key={place.id} />
                )
            })} */}
        </PlaceContainer>  
    )
}

const PlaceContainer = styled.div`
    display: flex;
    height: 150px;
    background: lightcoral;
`

export default PlaceList;