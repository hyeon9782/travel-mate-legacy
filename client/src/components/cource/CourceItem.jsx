import styled from 'styled-components';

const CourceItem = (item) => {
    return (
        <Item>
            {item.content ? item.content : "기본"} 
        </Item>
    )
}

const Item = styled.div`
    padding: 10px;
    background-color: lightgray;
    margin: 10px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`



export default CourceItem;