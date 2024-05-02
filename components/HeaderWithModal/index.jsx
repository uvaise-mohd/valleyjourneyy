import React from "react";
import Header from "../Header";

function HeaderWithModal() {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Header/>
      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(!modalOpen)}
        className="modal-dialog modal-dialog-centered"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              aria-label="Close"
              className="close"
              type="button"
              onClick={() => setModalOpen(!modalOpen)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <ModalBody>...</ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              type="button"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Close
            </Button>
            <Button color="primary" type="button">
              Save changes
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}

export default HeaderWithModal;
