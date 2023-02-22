import styled from 'styled-components';

const RegisterPage = () => {

    
    return (
        <RegisterPageBlock>
            <BasicInfoBox>
                <form>
                    <label>게시글 구분</label>
                    <input type="text" />
                    <label>모집 마감일</label>
                    <input type="text" />
                    <label>여행 기간</label>
                    <input type="text" />
                    <label>여행 지역</label>
                    <input type="text" />
                </form>
            </BasicInfoBox>
            <DetailContent>
                <TitleBox>
                    <label>제목</label>
                    <input type="text" />
                </TitleBox>
                <EditerBox>

                </EditerBox>
            </DetailContent>
            <TravelCourseBox>

            </TravelCourseBox>
        </RegisterPageBlock>
    )
}

const RegisterPageBlock = styled.div`
    
`

const BasicInfoBox = styled.div`
    
`

const DetailContent = styled.div`
    
`

const TitleBox = styled.div`
    
`

const EditerBox = styled.div`
    
`

const TravelCourseBox = styled.div`
    
`

export default RegisterPage;