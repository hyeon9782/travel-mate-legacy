import styled from 'styled-components';
import Container from '../components/common/Container';

const SettingPage = () => {
    return (
        <Container>
            <SettingSection>
                <input type="text" name="nickname" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </SettingSection>
        </Container>
    )
}

const SettingSection = styled.div`
    
`



export default SettingPage;