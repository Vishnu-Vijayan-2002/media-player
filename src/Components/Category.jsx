import React,{useState}from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FloatingLabel,Form} from 'react-bootstrap';
function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='btn btn-secondary rounded-circle f-5'>+</button>
      
      <Modal show={show} onHide={handleClose} backdrop="static"
      keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details!!</p>
          <FloatingLabel controlId="floatingInput"
            label="Category"
            className="mb-3">
              <Form.Control type="text" placeholder="Video Caption" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
