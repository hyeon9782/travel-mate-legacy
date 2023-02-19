import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState } from '../store/modalState';

const Modal = () => {

    const [isOpen, setOpen] = useRecoilState(modalState)

    const openModal = () => {
        console.log("안녕")
        setOpen(true)
        console.log(isOpen)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <ModalBox>
            <button onClick={openModal}>모달</button>
            <ModalBlock className={isOpen ? "show" : "hidden"}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <button onClick={closeModal}>닫기</button>
                </ModalContent>
            </ModalBlock>
        </ModalBox>
    )
}

const ModalBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalBox = styled.div`

    .hidden {
        display: none;
    }

    .show {
        display: block;
    }
    
`

const ModalOverlay = styled.div`
    background: rgba(0,0,0,0.4);
    height: 100vh;
    width: 100vw;
    position: absolute;
`

const ModalContent = styled.div`
    background: #fff;
    width: 350px;
    height: 300px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0, 0, 15px rgba(0, 0, 0, 0.15);
    padding: 30px;
    /* transform: translate(-50%, -50%);
    animation: slidefade 0.35s liner; */
`

const ModalHeader = styled.div`
    
`
export default Modal;