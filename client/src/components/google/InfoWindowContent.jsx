import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { placeState } from '../../store/placeState';

const InfoWindowContent = ({item, itemIndex}) => {

    const [place, setPlace] = useRecoilState(placeState);

    const [check, setCheck] = useState(false);

    const addPlace = () => {
        setPlace((oldPlace) => [
            ...oldPlace,
            {
                id: itemIndex,
                name: item.name,
                rating: item.rating,
                ratingsTotal: item.user_ratings_total,
                coord: item.geometry.location
            }
        ]);
        setCheck(true);
        console.log(place);
    }

    const removePlace = () => {
        const newPlaceList = place.filter((item) => item.id !== itemIndex);
        setPlace(newPlaceList);
        setCheck(false);
    }

    return (
        <ContentBlock>
            <div className='name'>{item.name}</div>
            <div className='rating'>평점 개수 : {item.user_ratings_total}개</div>
            <div className='rating'>평균 평점 : {item.rating}점</div>
            <div className='btn_box'>
                {!check ? 
                    <button className='addBtn' onClick={addPlace}>추가하기</button> : <button onClick={removePlace}>제거하기</button>
                }
            </div>
        </ContentBlock>
    )
}

const ContentBlock = styled.div`
    background: white;
    border: 1px solid #ccc;
    padding: 15px;

    .name {
        text-align: center;
        font-weight: bold;
    }

    .rating{
        padding-top: 2px;
    }

    .btn_box{
        display: flex;
        justify-content: center;
        padding-top: 5px;
    }
   
`

export default InfoWindowContent;