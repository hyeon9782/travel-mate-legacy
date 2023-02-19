import styled from 'styled-components';

const AreaItem = ({ item }) => {
    return (
        <AreaItemBlock>
            {item.name}
        </AreaItemBlock>
    )
}

const AreaItemBlock = styled.div`
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

export default AreaItem;