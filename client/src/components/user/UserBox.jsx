import styled from 'styled-components';

const UserBox = ({ profile, userName }) => {

    // console.log(userName)

    return (
        <UserBoxBlock>
            <UserProfile>
                <img src={profile} alt="x" width="100%" height="100%" />
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

const UserName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`
export default UserBox;