import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PhotoUploadForm } from "./Forms";

function PhotoUploadModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Photo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PhotoUploadForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export { PhotoUploadModal };
