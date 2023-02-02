import styled from 'styled-components';

const Days = () => {

    let num = 0;

    function addDay() {
        num = num + 1;
    }

    return (
        <DayWrap>
            <Day>{num + 1}일차</Day>                  
            <Plus onClick={addDay}>추가</Plus>
        </DayWrap>
    )
}

const DayWrap = styled.div`
    display: flex;
`

const Day = styled.div`
    background: lightgray;
    font-size: 28px;
    padding: 5px;
`

const Plus = styled.div`
    /* font-size: 60px; */
    background: lightcyan;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Days;