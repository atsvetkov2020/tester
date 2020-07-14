import React, { useState } from 'react';
import './ConfirmDialog.css';
import { Button, Modal } from 'react-bootstrap';
//import classes from 'ConfirmDialog.css';
// import your fontawesome library
import '../../plugins/fontawesome/fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;


const ConfirmDialog = (props: any) => {

    const style = {
        display: 'none'
    };
    //         display: 'block'
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    return (
        <div>
            <Button variant="primary" onClick={handleShow} style={style}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>&nbsp;</Modal.Title>
                </Modal.Header>
                <Modal.Body><FontAwesomeIcon icon={['fas', 'spinner']} spin/><span className="dialog-message">Loading...</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='dialog-secondary-button'>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} className='dialog-primary-button'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default ConfirmDialog;