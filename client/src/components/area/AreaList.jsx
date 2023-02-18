import styled from 'styled-components';
import AreaItem from './AreaItem';

const AreaList = () => {

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
        <AreaListBlock>
            {areas.map(area => <AreaItem key={area.id} item={area} />)}
        </AreaListBlock>
    )
}

const AreaListBlock = styled.div`
    display: flex;
`

export default AreaList;