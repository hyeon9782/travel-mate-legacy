import styled from 'styled-components';
import CityItem from './CityItem';

const CityList = () => {

    const areas = [
        {
            id: 0,
            name: "서울", 
        },
        {
            id: 2,
            name: "부산", 
        },
        {
            id: 3,
            name: "강릉", 
        },
    ]

    return (
        <CityListBlock>
            <CityTab>
                <span>전체</span>ㅣ<span>국내</span>ㅣ<span>해외</span>
            </CityTab>
            <CityListBox>
                {areas.map(area => <CityItem key={area.id} item={area} />)}
            </CityListBox>
        </CityListBlock>
    )
}

const CityListBlock = styled.div`
    
`

const CityListBox = styled.div`
    display: flex;
`

const CityTab = styled.div`
    
    font-size: 1.7rem;
    span {
        padding: 10px;
    }
`

export default CityList;