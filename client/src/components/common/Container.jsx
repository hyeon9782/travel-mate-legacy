import styled from 'styled-components';

const Container = ({ children }) => {
    return <ContainerBlock>{children}</ContainerBlock>
}

const ContainerBlock = styled.div`
    /* @media screen and (max-width: 100px){
        
    } */
    margin: 0 auto;
    width: 1200px;
`

export default Container;