import styled from 'styled-components';
import PartyItem from './PartyItem';

const PartyList = () => {

    const parties = [
        {
            id: 0,
            title: "제목 1",
            area: "부산",
            startDate: "2023.02.10",
            endDate: "2023.02.16",
        },
        {
            id: 1,
            title: "제목 2",
            area: "부산",
            startDate: "2023.02.10",
            endDate: "2023.02.16",
        },
        {
            id: 2,
            title: "제목 3",
            area: "부산",
            startDate: "2023.02.10",
            endDate: "2023.02.16",
        },
        {
            id: 3,
            title: "제목 4",
            area: "부산",
            startDate: "2023.02.10",
            endDate: "2023.02.16",
        },
        {
            id: 4,
            title: "제목 5",
            area: "부산",
            startDate: "2023.02.10",
            endDate: "2023.02.16",
        },
    ]

    return (
        <PartyListBlock>
            {parties.map((party) => <PartyItem item={party} key={party.id} />)}
        </PartyListBlock>
    )
}

const PartyListBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 960px;
    grid-gap: 20px;
    gap: 20px;
    
`

export default PartyList;