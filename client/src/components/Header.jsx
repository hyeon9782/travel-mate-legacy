import styled from 'styled-components';
import {Outlet, Link} from 'react-router-dom';


let Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                <Link to="/">
                    Logo
                </Link>
            </Logo>
            <Nav>
                <ul style={{"display":"flex"}}>
                    <li style={{"padding": "10px"}}>
                        <Link to="/">
                            메인
                        </Link>
                    </li>
                    <li style={{"padding": "10px"}}>
                        <Link to="/search">
                            검색
                        </Link>
                    </li>
                    <li style={{"padding": "10px"}}>
                        <Link to="/plan">
                            코스
                        </Link>
                    </li>
                    <li style={{"padding": "10px"}}>
                        <Link to="/party">
                            동행
                        </Link>
                    </li>
                </ul>
            </Nav>
            <WriteBtn>
                <Link to="/writing">
                    글쓰기
                </Link>
            </WriteBtn>
            <Login>
                <Link to="/">
                    Login
                </Link>
            </Login>
            <Outlet />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    background-color: lightgray;
    font-size: 2em;
    position: sticky;
    top: 0;
    left: 0;
`

const Logo = styled.div`
    font-weight: bold;
    width: 15%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    Link {
        color: black;

    }
`

const Nav = styled.div`
    font-weight: bold;
    padding: 10px;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Login = styled.div`
    font-weight: bold;
    padding: 10px;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WriteBtn = styled.div`
    font-size: 1em;
    font-weight: bold;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Header;