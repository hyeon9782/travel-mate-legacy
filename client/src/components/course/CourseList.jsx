import { useRecoilState } from "recoil";
import { courceListState } from "../../store/courceListState";
import CourceItem from "./CourseItem";
import styled from 'styled-components';

const CourseList = ({list}) => {

    const [courceList, setCourceList] = useRecoilState(courceListState)

    return (
        <CourceBox>
            {courceList.map((cource, index) => {
                return <CourceItem item={cource} key={index}/>
            })}
        </CourceBox>
    )
}

const CourceBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default CourseList;