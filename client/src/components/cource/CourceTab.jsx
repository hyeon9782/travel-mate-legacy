import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import { courceTabState } from "../../store/courceTabState";
import { selectTabState } from "../../store/selectTabState";

const CourceTab = () => {

    const [currentTab, clickTab] = useRecoilState(selectTabState);
    
    const courceTab = useRecoilValue(courceTabState);

    const selectMenuHandler = (index) => {
        console.log("클릭")
    }

    return (
        <div>
            <div style={{"display": "flex"}}>
                {/* {courceTab.map((cource, index) => {
                    return <CourceTabMenu onClick={selectMenuHandler(index)}>{index + 1} 일차</CourceTabMenu>
                })} */}

                {courceTab.map((item, index) => {
                    return <div key={index} onClick={selectMenuHandler(index)}> {index + 1} 일차 </div>
                })}
            </div>
            {courceTab[currentTab].name}
        </div>
    )
}

const CourceTabMenu = styled.div`
    background: lightgray;
    font-size: 28px;
    padding: 5px;
`



export default CourceTab;