import { useEffect, useRef, useState } from "react";
import PostingItem from "../posting/PostingItem";

const InfiniteScroll = ({ list, params }) => {
    const [bottom, setBottom] = useState();
    const bottomObserver = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    const { page, totalElement, limit } = params.pagaData;
                    if (totalElement < limit * (page -1)) {
                        return;
                    }
                    
                }
            }
        )
    })



    return (
        <>
            {list.map(item => (
                <PostingItem key={item.id} item={item}/>
            ))}
            <div ref={setBottom}></div>
        </>
    )
}

export default InfiniteScroll;