import { useState } from 'react';
import styled from 'styled-components';

const SearchPage = () => {

    let [keyword, setKeyword] = useState("");

    const searchKeyword = () => {
        setKeyword(keyword);
    }

    const placeList = [
        {
            name: "장소 1",
            addr: "강북구 미아동 1"
        },
        {
            name: "장소 2",
            addr: "강북구 미아동 1"
        },
        {
            name: "장소 3",
            addr: "강북구 미아동 1"
        },
        {
            name: "장소 3",
            addr: "강북구 미아동 1"
        },
        {
            name: "장소 3",
            addr: "강북구 미아동 1"
        },
        {
            name: "장소 3",
            addr: "강북구 미아동 1"
        },
        {
            name: "장소 3",
            addr: "강북구 미아동 1"
        },
        {
            name: "장소 3",
            addr: "강북구 미아동 1"
        },
        {
            name: "장소 3",
            addr: "강북구 미아동 1"
        },
    ]

    return (
        <SearchContainer>
            SearchPage
            <input type="text" value={keyword}/>
            <PlaceList>
                {placeList.map((item) => <PlaceItem item={item} />)}
            </PlaceList>
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    
`

const PlaceList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const PlaceItem = styled.div`
    width: 15%;
    height: 150px;
    margin: 10px;
    border-radius: 10%;
    background: lightgray;
`

export default SearchPage;