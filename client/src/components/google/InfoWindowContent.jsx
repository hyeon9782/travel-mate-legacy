import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { placeState } from '../../store/placeState';

const InfoWindowContent = ({item}) => {

    const [place, setPlace] = useRecoilState(placeState);

    const [check, setCheck] = useState(false);

    const index = place.findIndex((listItem) => listItem === item);

    const addPlace = () => {
        setPlace((oldPlace) => [
            ...oldPlace,
            {
                id: item.place_id,
                name: item.name,
                rating: item.rating,
                ratingsTotal: item.user_ratings_total
            }
        ]);
        setCheck(true);
        console.log(place);
    }

    const removePlace = () => {
        const newList = removeItemAtIndex(place, index);
        setPlace(newList);
        setCheck(false);
        console.log(index);
        console.log(place);
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

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
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