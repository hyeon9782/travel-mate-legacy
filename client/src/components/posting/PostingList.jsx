import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPosting } from '../../apis/posting';
import PostingItem from './PostingItem';

const PostingList = () => {

    const tabs = ["동행 모집", "여행 후기", "여행 질문"]

    const [testList, setTestList] = useState([]);

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const res = await fetchPosting()
        console.log(res);
        setTestList(res.data)
    }
    

    return (
        <PostingListBlock>
            <PostingTab>
                {tabs.map((item , index) => <div key={index} >{item}</div>)}
            </PostingTab>
            <PostingListBox>
                {testList.map(posting => <PostingItem key={posting.posting_id} item={posting} />)}
            </PostingListBox>
        </PostingListBlock>
    )
}

const PostingListBlock = styled.div`
    /* box-sizing: border-box; */
    margin: 0 auto;
    
`

const PostingListBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`

const PostingTab = styled.div`
    font-size: 1.7rem;
    display: flex;
    
    margin-bottom: 10px;

    div {
        padding: 10px;
    }
`

export default PostingList;