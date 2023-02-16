import styled from 'styled-components';

const PartyItem = ({ item }) => {
    return (
        <PartyItemBlock>
            {item.title}
        </PartyItemBlock>
    )
}

const PartyItemBlock = styled.div`
    border: 2px solid lightgray;
    border-radius: 15px;
    width: 250px;
    height: 300px;
    margin: 10px;

`

export default PartyItem;