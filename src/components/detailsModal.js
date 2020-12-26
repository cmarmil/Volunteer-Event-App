import { useContext, useState } from "react";
import { store } from "./appContext";
import CheckmarkIcon from "./checkmarkIcon";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DetailsModal = () => {
  const { state, dispatch } = useContext(store);
  const [isSuccess, setSuccess] = useState(false);
  
  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }

  function volunteerClick() {
    dispatch({ type: "ADD_EVENT", payload: state.activeEvent });
    setSuccess(true);
    setTimeout(() => {
      toggleModal();
      setSuccess(false);
    }, 1000);
  }

  const SuccessButtonContent = (
    <>
      Success! <CheckmarkIcon />{" "}
    </>
  );

  return (
    <div>
      <Modal isOpen={state.modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {state.activeEvent?.name}
        </ModalHeader>
        <ModalBody>{state.activeEvent?.description}</ModalBody>
        <ModalFooter>
          <Button
            color={isSuccess ? "success" : "primary"}
            onClick={volunteerClick}
          >
            {isSuccess ? SuccessButtonContent : "Volunteer"}
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DetailsModal;
