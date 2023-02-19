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
            <AreaTab>
                <span>국내</span>ㅣ<span>해외</span>
            </AreaTab>
            <AreaListBox>
                {areas.map(area => <AreaItem key={area.id} item={area} />)}
            </AreaListBox>
        </AreaListBlock>
    )
}

const AreaListBlock = styled.div`
    
`

const AreaListBox = styled.div`
    display: flex;
`

const AreaTab = styled.div`
    
    font-size: 1.7rem;
    span {
        padding: 10px;
    }
`

export default AreaList;