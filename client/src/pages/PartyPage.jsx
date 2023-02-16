import styled from 'styled-components';
import PartyList from "../components/party/PartyList";

const PartyPage = () => {
    return (
        <PartyPageBloack>
            <PartyList />
        </PartyPageBloack>
    )
}

const PartyPageBloack = styled.div`
    margin-top: 80px;
    width: 1260px;
    margin: 0 auto;
`

export default PartyPage;