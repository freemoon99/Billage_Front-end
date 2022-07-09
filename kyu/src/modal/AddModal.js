import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './AddModal.css';

const AddModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>
        <img src="plusButton.png" onClick={handleShow} style={{cursor:"pointer" , width:"5%", position:'fixed', top: '83%', left: '85%',transform: 'translate(-50%, -50%)'}}/>
        <Modal className="modal-container" show={show} onHide={handleClose} size="sm">
            <div className="modal-text">대여</div>
            <div className="modal-text">판매</div>
            <div className="modal-text">공동구매</div>
        </Modal>
    </>
    );
}

export default AddModal;