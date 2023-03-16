import styled from 'styled-components';

const UserBox = ({ profile, userName }) => {

    return (
        <UserBoxBlock>
            <UserProfile>
                {profile ? <img src={profile} alt="x" width="100%" height="100%" /> : <BasicProfile>기본</BasicProfile>}
            </UserProfile>
            <UserName>{userName}</UserName>
        </UserBoxBlock>
    )
}

const UserBoxBlock = styled.div`
    display: flex;
    padding: 10px;
`

const UserProfile = styled.div`
    width: 50px;
    height: 50px;
`

const BasicProfile = styled.div`
    width: 50px;
    height: 50px;
    background: lightgray;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`
export default UserBox;