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
          <Button onClick={props.onHide}>Не</Button>
          <Button onClick={props.deleteClicked}>Да, изтрий</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default DeleteModal;