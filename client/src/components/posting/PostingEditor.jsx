import { useRef, useState } from "react";
import Editor from "./Editor";

const PostingEditor = () => {
    const [htmlContent, setHtmlContent] = useState(""); //🌈
    const quillRef = useRef(); //🌈

    //  const handleSubmit = async () => {
    //     const description = quillRef.current.getEditor().getText(); //태그를 제외한 순수 text만을 받아온다. 검색기능을 구현하지 않을 거라면 굳이 text만 따로 저장할 필요는 없다.
    //     if (description.trim()==="") {
    //         alert("내용을 입력해주세요.")
    //         return;
    //     }
    //     if (postId) {
    //         //기존 게시글 업데이트
    //         await api.updatePost({postId,description,htmlContent});
    //         //history.push(`/@${user.name}/post/${postId}`);
    //     } else {
    //         //새로운 게시글 생성
    //         await api.createNewPost({description,htmlContent});
    //         //history.push(`/@${user.name}/posts?folder=${selectedFolder}`);
    //     }
    // }
    return (
        <div>
            <Editor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={setHtmlContent} api={api} />
            {/* <button className={styles.submit} onClick={handleSubmit}>Done</button> */}
        </div>
    )
}

export default PostingEditor;