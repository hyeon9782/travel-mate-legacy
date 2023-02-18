import styled from 'styled-components';
import {Outlet, Link} from 'react-router-dom';


let Header = () => {

    const navList = [
        {
            name: "글쓰기",
            link: "/"
        },
        {
            name: "여행 코스",
            link: "/cource"
        }
    ]

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
                        {navList.map(nav => <Link to={nav.link}>{nav.name}</Link>)}
                    </Nav>
                    <Login>
                        <Link to="/">
                            Login
                        </Link>
                    </Login>
                </LinkBlock>
            </HeaderBlock>
            <Outlet />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    height: 70px;
    width: 100vw;
    background-color: lightgray;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    left: 0;
    a {
        color: black;
        padding: 10px;
    }
`

const HeaderBlock = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.div`
    font-weight: bold;
    /* width: 15%; */
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
`

const Nav = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Login = styled.div`
    font-weight: bold;
    padding: 10px;
    /* width: 15%; */
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Header;