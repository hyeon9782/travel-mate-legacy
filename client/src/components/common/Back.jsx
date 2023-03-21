import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Back = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <BackBlock onClick={handleClick}>←</BackBlock>
    )
}

const BackBlock = styled.div`
    font-size: 3rem;
`

export default Back;