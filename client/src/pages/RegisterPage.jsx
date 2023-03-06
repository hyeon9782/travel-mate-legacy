import { useState } from 'react';
import styled from 'styled-components';
import { registerPosting } from '../apis/posting';

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        title: "",
        city: "",
        category: "",
        startDate: "",
        endDate: "",
        deadline: "",
        userName: "관리자",
        contents: "",
    });

    const { title, city, category, startDate, endDate, deadline, contents } = formData;

    const onChangeForm = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData);
    }

    const onReset = () => {
        setFormData({
            title: "",
            city: "",
            category: "",
            startDate: "",
            endDate: "",
            deadline: "",
            userName: "관리자",
            contents: "",
        })
    }

    

    return (
        <RegisterPageBlock>
            <BasicInfoBox>
                <SectionHead>
                    게시글 기본 정보를 입력해주세요.
                </SectionHead>
                <form>
                    <ul>
                        <li>
                            <label>게시글 구분</label><br />
                            <input type="text" name='category' className='input1' onChange={onChangeForm} value={category}/>
                        </li>
                        <li>
                            <label>모집 마감일</label><br />
                            <input type="date" name='deadline' className='input1' onChange={onChangeForm} value={deadline}/>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <label>여행 기간</label><br />
                            <DurationBox>
                                <input type="date" name="startDate" className='input2'onChange={onChangeForm} value={startDate} />
                                <input type="date" name="endDate" className='input2'onChange={onChangeForm} value={endDate} />
                            </DurationBox>
                        </li>
                        <li>
                            <label>여행 지역</label><br />
                            <input type="tex" name='city' className='input1' onChange={onChangeForm} value={city}/>
                        </li>
                    </ul>
                </form>
            </BasicInfoBox>
            <DetailContent>
                <SectionHead>
                    게시글 상세 내용를 입력해주세요.
                </SectionHead>
                <TitleBox>
                    <label>제목</label>
                    <input type="text" name='title' onChange={onChangeForm} value={title} />
                </TitleBox>
                <EditerBox>
                    <textarea name="contents" className='contents' onChange={onChangeForm} value={contents}></textarea>
                </EditerBox>
                <BtnBox>
                    <CancleBtn>취소</CancleBtn>
                    <ResetBtn onClick={onReset}>초기화</ResetBtn>
                    <ResitBtn onClick={() => registerPosting(formData)}>등록</ResitBtn>
                </BtnBox>
            </DetailContent>
            <TravelCourseBox>

            </TravelCourseBox>
        </RegisterPageBlock>
    )
}

const RegisterPageBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 1024px;
    margin: 0 auto;
    padding: 60px 16px;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: flex-end;
`

const ResitBtn = styled.button`
    width: 100px;
    height: 50px;
    background: black;
    color: white;
`

const ResetBtn = styled.button`
    width: 100px;
    height: 50px;
    background: lightcoral;
`

const CancleBtn = styled.button`
    width: 100px;
    height: 50px;
    background: lightgray;
    color: white;
`

const SectionHead = styled.div`
    padding: 16px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 3px solid lightgrey;
`

const BasicInfoBox = styled.div`
    
    ul {
        margin-top: 20px;
        display: flex;

        li {
            width: 100%;
            padding: 10px;
            
            
        }
    }

    label {
        font-size: 1.4rem;
        font-weight: bold;
    }

    .input1 {
        margin-top:10px;
        width: 100%;
        height: 30px;
    }

    .input2 {
        /* margin-top:10px; */
        width: 50%;
        height: 30px;
        margin: 10px 5px;
    }
`

const DurationBox = styled.div`
    display: flex;
`

const DetailContent = styled.div`
    
    font-size: 24px;
    font-weight: bold;
    border-bottom: 3px solid lightgray;
    
`

const TitleBox = styled.div`
    
    padding: 10px;
    margin-top: 10px;
    input {
        width: 100%;
        height: 40px;
        margin-top: 10px;
    }
`

const EditerBox = styled.div`
    padding: 10px;

    .contents{
        width: 100%;
        height: 300px;
    }
    
`

const TravelCourseBox = styled.div`
    
`

export default RegisterPage;