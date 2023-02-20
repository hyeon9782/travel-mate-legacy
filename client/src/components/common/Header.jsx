import styled from 'styled-components';
import {Outlet, Link} from 'react-router-dom';
import { useState } from 'react';


let Header = () => {

    const [click, setClick] = useState(false);

    const [isLogin, setLogin] = useState(false);

    const navList = [
        {
            name: "글쓰기",
            link: "/register"
        },
        {
            name: "여행 기획",
            link: "/search"
        }
    ]

    const onClick = () => setClick(click ? false : true);

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
                    <Login>
                        <Link to="/">
                            Login
                        </Link>
                    </Login>
                    <Profile onClick={onClick} >
                        기본
                    </Profile>
                    <ClickLogin className={click ? "show" : "hidden"}>
                        <ul>
                            <li className='hidden'>
                                <Link to="/search">
                                    여행 기획
                                </Link>
                            </li>
                            <li className='hidden'>
                                <Link to="/register">
                                    글쓰기
                                </Link>
                            </li>
                            <li>
                                <Link to="/myPosts">
                                    내 작성글
                                </Link>
                            </li>
                            <li>
                                <Link to="/setting">
                                    내 정보 수정
                                </Link>
                            </li>
                            <li>로그 아웃</li>
                        </ul>
                    </ClickLogin>
                </LinkBlock>
            </HeaderBlock>
            <Outlet />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    height: 5vh;
    width: 100vw;
    background-color: lightgray;
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
        display: block;
    }
`

const Profile = styled.div`
    background: gray;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ClickLogin = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    /* margin-top: 1rem; */
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