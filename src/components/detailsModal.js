import { useContext } from "react";
import { store } from "./appContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DetailsModal = () => {
  const { state, dispatch } = useContext(store);
  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }
  return (
    <div>
      <Modal isOpen={state.modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{state.activeEvent?.name}</ModalHeader>
        <ModalBody>
          {state.activeEvent?.description}
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Volunteer</Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DetailsModal;
