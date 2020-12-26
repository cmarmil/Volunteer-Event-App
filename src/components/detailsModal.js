import { useContext } from "react";
import { store } from "./appContext";
import { useLocation } from 'react-router-dom'

import ModalFooterVolunteer from "./modalFooterVolunteer";
import ModalFooterRemove from "./modalFooterRemove";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const DetailsModal = (props) => {
  const { state, dispatch } = useContext(store);
  let currentRoute = useLocation().pathname;

  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }

  return (
    <div>
      <Modal isOpen={state.modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {state.activeEvent?.name}
        </ModalHeader>
        <ModalBody>{state.activeEvent?.description}</ModalBody>
        {currentRoute === '/' ? (
          <ModalFooterVolunteer toggle={toggleModal} />
        ) : (
          <ModalFooterRemove toggle={toggleModal} />
        )}
      </Modal>
    </div>
  );
};

export default DetailsModal;
