import styled from 'styled-components';
import {Outlet, Link} from 'react-router-dom';


let Header = () => {
    return (
        <HeaderContainer>
            <Log>Logo</Log>
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
            <Login>Login</Login>
            <Outlet />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    background-color: lightgray;
    font-size: 34px;
    /* position: fixed;
    top: 0;
    left: 0; */
`

const Log = styled.div`
    font-weight: bold;
    width: 15%;
    padding: 10px;
`

const Nav = styled.div`
    font-weight: bold;
    padding: 10px;
    width: 70%;
`

const Login = styled.div`
    font-weight: bold;
    padding: 10px;
    width: 15%;
`

export default Header;