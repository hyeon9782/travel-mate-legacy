import styled from 'styled-components';
import Map from '../components/google/Map';
import MapSearch from '../components/google/MapSearch';

const SearchPage = () => {
    return (
        <SearchPageBlock>
            <SearchHead>
                <SearchBox>
                    <MapSearch />
                </SearchBox>
                <BtnBox>
                    <button>다음</button>
                </BtnBox>
            </SearchHead>
            <MapBlock>
                <SearchMap>
                    <Map />
                </SearchMap>
                <SelectMap>
                    <Map />
                </SelectMap>
                
            </MapBlock>
        </SearchPageBlock>
    )
}

const SearchPageBlock = styled.div`
    display: flex;
    height: 95vh;
`

const SearchHead = styled.div`
    height: 100%;
    width: 500px;
    background: gray;
`

const SearchBox = styled.div`
    
`

const BtnBox = styled.div`
    
`

const MapBlock = styled.div`
    height: 100%;
    width: 100%;
    background: lightblue;
    margin: 0;
`

const SearchMap = styled.div`
    height: 50%;
    width: 50%;
    margin: 0;
`

const SelectMap = styled.div`
    height: 50%;
    width: 50%;
    margin: 0;
`






export default SearchPage;