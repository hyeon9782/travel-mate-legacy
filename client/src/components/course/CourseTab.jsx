import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import { courceTabState } from "../../store/courceTabState";
import { selectTabState } from "../../store/selectTabState";
import DayCreator from "../days/DayCreator";

const CourseTab = () => {

    const [currentTab, clickTab] = useRecoilState(selectTabState);
    
    const courceTab = useRecoilValue(courceTabState);
    
    const selectMenuHandler = (index) => {
        console.log(`Day ${index + 1}`)
        clickTab(index)  
    }

    return (
        <div>
            <CourseTabMenu>
                
                {courceTab.map((item, index) => {
                    return (
                        // <DayItem className={index === currentTab ? "focused" : "submenu"}   key={index} onClick={() => selectMenuHandler(index)} />
                        <CourseTabMenu className={index === currentTab ? "focused" : "submenu"}   key={index} onClick={() => selectMenuHandler(index)}> {index + 1} 일차 </CourseTabMenu>
                    )
                })}
                <DayCreator />
            </CourseTabMenu>
            <div>
                {courceTab[currentTab].content}
            </div>
        </div>
    )
}

const CourseTabMenu = styled.div`
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



export default CourseTab;