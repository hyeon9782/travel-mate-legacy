import styled from 'styled-components';
import PostingItem from './PostingItem';
import useFetchPosting from "../../hooks/useFetchPosting";
import useIntersect from "../../hooks/useIntersect";
import Loading from '../common/Loading'
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const PostingList = ({ userId }) => {
    const [category, setCategory] = useState(null);

    const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useFetchPosting({ size: 8, category, userId})

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
            {postings.map(posting => <PostingItem key={posting.id} item={posting} />)}
            {isFetching && <Loading />}
            <div ref={ref} style={{"height": "1px"}}></div>
        </PostingListBlock>
    )
}

const PostingListBlock = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    
`
export default PostingList;