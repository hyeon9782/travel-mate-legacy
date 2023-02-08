import ReactModal from 'react-modal';

const Modal = ({ isOpen }) => {
    return (
        <div style={{"zIndex" : 2}}>
            <ReactModal isOpen={isOpen} >
                <div>Modal</div>
            </ReactModal>
        </div>
    )
}

export default Modal;