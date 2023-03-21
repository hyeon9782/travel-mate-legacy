import styled from 'styled-components';
import useFetchPosting from '../../hooks/useFetchPosting';

const CityItem = ({ item }) => {
    const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useFetchPosting({ size: 8, city: "서울"})
    const handleClick = () => {
        
    }
    return (
        <CityItemBlock onClick={handleClick}>
            {item.name}
        </CityItemBlock>
    )
}

const CityItemBlock = styled.div`
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.7em;
    width: 150px;
    height: 150px;
    margin: 10px;
    border-radius: 50%;
`

export default CityItem;