import styled from 'styled-components';
import {Outlet, Link} from 'react-router-dom';
import { useState } from 'react';
import Dialog from './Dialog';
import { useRef } from 'react';
import LoginDialog from './LoginDialog';
import { useRecoilState } from 'recoil';
import { loginState } from '../../store/loginState';



let Header = () => {

    const ref = useRef(null);

    const [click, setClick] = useState(false);

    const [isLogin, setIsLogin] = useRecoilState(loginState);

    const navList = [
        {
            name: "글쓰기",
            link: "/register"
        },
        {
            name: "여행 기획",
            link: "/course"
        }
    ]

    const navClick = () => {

    }

    const onClick = () => setClick(click ? false : true);

    const logout = () => {
        setIsLogin(false);
        localStorage.removeItem("com.naver.nid.access_token");
        localStorage.removeItem("com.naver.nid.oauth.state_token");
        window.location.href = '/';
    }

    return (
        <HeaderContainer>
            <HeaderBlock>
                <Logo>
                    <Link to="/">
                        Plannig Helper
                    </Link>
                </Logo>
                <LinkBlock>
                    <Nav>
                        {navList.map((nav, index) => <Link to={nav.link} key={index}>{nav.name}</Link>)}
                    </Nav>
                    <Login onClick={() => ref.current?.showModal()} className={isLogin ? "hidden" : "show"}>
                        Login
                    </Login>
                    <Profile onClick={onClick} className={isLogin ? "show" : "hidden"}>
                        <div>기본</div>
                    </Profile>
                    <ClickLogin className={click ? "show" : "hidden"}>
                        <ul>
                            <li className='hidden'>
                                <Link to="/course">
                                    여행 기획
                                </Link>
                            </li>
                            <li className='hidden'>
                                <Link to="/register">
                                    글쓰기
                                </Link>
                            </li>
                            <li>
                                <Link to="/myPosting">
                                    내 작성글
                                </Link>
                            </li>
                            <li>
                                <Link to="/setting">
                                    내 정보 수정
                                </Link>
                            </li>
                            <li onClick={logout}>로그 아웃</li>
                        </ul>
                    </ClickLogin>
                </LinkBlock>
                <Dialog ref={ref}>
                    <LoginDialog />
                </Dialog>
            </HeaderBlock>
            <Outlet />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: lightgray;
    align-items: center;
    height: 70px;
    padding: 0 10px;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    left: 0;
    a {
        color: black;
    }

    .hidden {
        display: none;
    }

    .show { 
        display: flex;
    }
`

const Profile = styled.div`
    background: gray;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 5px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ClickLogin = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    right: 0;

    

    li:hover {
        background: red;
    }
    
    
    
`

const HeaderBlock = styled.div`
    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.div`
    font-weight: bold;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    Link {
        color: black;

    }
`

const LinkBlock = styled.div`
    display: flex;
    position: relative;
`

const Nav = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        padding: 10px;
    }
    
`

const Login = styled.div`
    font-weight: bold;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Header;