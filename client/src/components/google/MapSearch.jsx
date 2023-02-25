import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchGoogleMap } from '../../apis/google';
import { searchState } from '../../store/searchState';
import styled from 'styled-components';

function MapSearch() {
  const [input, setInput] = useState('');

  const setSearchState = useSetRecoilState(searchState)
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await searchGoogleMap(input)
    setSearchState(res.data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SearchInput type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="장소를 검색해주세요" />
      </form>
    </div>
  );
}

const SearchInput = styled.input`
  
  width: 100%;
  height: 30px;
  
`

export default MapSearch;
