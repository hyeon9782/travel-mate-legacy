import styled from 'styled-components';

const PostingTab = () => {
    const tabs = ["동행 모집", "여행 후기", "여행 질문"]
    return (
        <TabBlock>
            {tabs.map((item , index) => <div key={index} onClick={() => setCategory(item)}>{item}</div>)}
        </TabBlock>
    )
}

const TabBlock = styled.div`
    font-size: 1.7rem;
    display: flex;
    margin-bottom: 10px;
`

export default PostingTab;