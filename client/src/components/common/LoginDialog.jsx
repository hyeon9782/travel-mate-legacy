import styled from 'styled-components';
import NaverLogin from '../naver/NaverLogin';

const LoginDialog = () => {
    return (
        <LoginDialogBlock>
            <ContentBox>
                <ContentMessage>
                    Planning Helper에 오신걸 환영합니다!
                </ContentMessage>
                <NaverLogin />
            </ContentBox>
        </LoginDialogBlock>
    )
}

const LoginDialogBlock = styled.div`
    /* width: 700px;
    height: 500px; */
    padding: 30px;
    font-weight: bold;
    font-size: 1em;
`

const ContentBox = styled.div`
    text-align: center;
`

const ContentMessage = styled.div`
    margin: 50px 0;
`



export default LoginDialog;