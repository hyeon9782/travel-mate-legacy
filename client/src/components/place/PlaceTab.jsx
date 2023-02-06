import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { placeState } from '../../store/placeState';

const PlaceTab = () => {

    const placeTab = useRecoilValue(placeState);

    return (
        <div>
            <PlaceTabMenu>
                
            </PlaceTabMenu>
            {}
        </div>
    )
}

const PlaceTabMenu = styled.div`
    height: 50px;
    width: 300px;
    background: lightgray;
`


export default PlaceTab;