import { forwardRef } from 'react';
import styled from 'styled-components';

const Dialog = forwardRef((props, ref) => {

    return (
        <>
            <dialog 
                ref={ref}
                onClick={(e) => {
                    if (e.target === ref.current) ref.current?.close()
                }}
                style={{ padding: "10px" }}
            >
                <DialogHead>
                    <div>Planning Helper</div>
                    <button onClick={() => ref.current?.close()}>X</button>
                </DialogHead>
                <DiaLogContent>
                    {props.children}
                </DiaLogContent>
            </dialog>
        </>
    )
})

const DialogHead = styled.div`
    display: flex;
    justify-content: space-between;
`

const DiaLogContent = styled.div`
    
`

export default Dialog;