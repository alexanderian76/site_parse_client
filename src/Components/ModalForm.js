import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalForm(props) {
  const [show, setShow] = useState(false);
    const [textValue, setTextValue] = useState("")
  const handleClose = () => props.setVisible(false);
  const handleSubmit = (value) => props.OnSubmit(value);
  

  return (
    <>
      <Modal size='lg' centered show={props.Visible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Описание задачи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
             // controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label></Form.Label>
              <Form.Control readOnly={props.readonly} as="textarea" defaultValue={props.Value} rows={5} id='description'/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.readonly == false ? 'Отмена' : 'Закрыть'}
          </Button>
          <Button style={{display: props.readonly == true ? 'none' : ""}} variant="primary" onClick={() => {
            handleSubmit(document.getElementById('description').value); 
            handleClose()
            }}>
            Добавить задачу
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;