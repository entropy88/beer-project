import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      
        <Modal.Body>        
          <p>
           Сигурни ли сте че искате да изтриете този запис?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Не</Button>
          <Button variant="danger" onClick={props.deleteclicked}>Да, изтрий</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default DeleteModal;