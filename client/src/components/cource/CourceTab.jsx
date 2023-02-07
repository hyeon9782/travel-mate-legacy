import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import { courceTabState } from "../../store/courceTabState";
import { selectTabState } from "../../store/selectTabState";
import DayCreator from "../days/DayCreator";

const CourceTab = () => {

    const [currentTab, clickTab] = useRecoilState(selectTabState);
    
    const courceTab = useRecoilValue(courceTabState);
    
    const selectMenuHandler = (index) => {
        console.log(`Day ${index + 1}`)
        clickTab(index)  
    }

    return (
        <div>
            <CourceTabMenu>
                
                {courceTab.map((item, index) => {
                    return (
                        // <DayItem className={index === currentTab ? "focused" : "submenu"}   key={index} onClick={() => selectMenuHandler(index)} />
                        <CourceTabMenu className={index === currentTab ? "focused" : "submenu"}   key={index} onClick={() => selectMenuHandler(index)}> {index + 1} 일차 </CourceTabMenu>
                    )
                })}
                <DayCreator />
            </CourceTabMenu>
            <div>
                {courceTab[currentTab].content}
            </div>
        </div>
    )
}

const CourceTabMenu = styled.div`
    background: lightgray;
    font-size: 28px;
    padding: 5px;
    display: flex;

    .submenu {

    }

    .focused {
        background: black;
        color: white;
    }
`



export default CourceTab;