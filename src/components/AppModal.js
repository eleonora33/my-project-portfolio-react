import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AppModal(props) {
    const { header, bodyTitle, bodyMain, bodyFooter } = props.data;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{bodyTitle}</h4>
          <p>{bodyMain}</p>
          <p>{bodyFooter}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant='outline-warning'>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AppModal;