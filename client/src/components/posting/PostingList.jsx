import styled from 'styled-components';
import PostingItem from './PostingItem';
import useFetchPosting from "../../hooks/useFetchPosting";
import useIntersect from "../../hooks/useIntersect";
import Loading from '../common/Loading'
import CityList from '../city/CityList'
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const PostingList = ({ userId }) => {

    const tabs = ["동행 모집", "여행 후기", "여행 질문"]

    const [category, setCategory] = useState(null);

    const [city, setCity] = useState(null);

    const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useFetchPosting({ size: 8, category})

    const postings = useMemo(
        () => (data ? data.pages.flatMap(({ data }) => data.contents) : []),
        [data]
    )
    
    useEffect(() => {
        refetch({ refetchPage: 0 })
    }, [category])
    

    const ref = useIntersect(async (entry, observer) => {
        observer.unobserve(entry.target)
        if (hasNextPage && !isFetching) {
            fetchNextPage()
        }
    })

    return (
        <PostingListBlock>
            <CityList />
            <PostingTab>
                {tabs.map((item , index) => <div key={index} onClick={() => setCategory(item)}>{item}</div>)}
            </PostingTab>
            <PostingListBox>
                {postings.map(posting => <PostingItem key={posting.id} item={posting} />)}
                {isFetching && <Loading />}
                <div ref={ref} style={{"height": "1px"}}></div>
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