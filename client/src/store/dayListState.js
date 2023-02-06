import {atom} from 'recoil';
import CourceList from '../components/cource/CourceList';

export const dayListState = atom({
    key: "dayListState",
    default: [
        {
            day: 1,
            content: <CourceList />
        }
    ],
});