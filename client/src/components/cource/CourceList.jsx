import { useRecoilState } from "recoil";
import { courceListState } from "../../store/courceListState";
import CourceItem from "./CourceItem";

const CourceList = () => {

    const [courceList, setCourceList] = useRecoilState(courceListState)

    return (
        <div>
            {courceList.map((cource) => {
                return <CourceItem item={cource}/>
            })}
        </div>
    )
}

export default CourceList;