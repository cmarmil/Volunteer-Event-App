import { useContext } from "react";
import { store } from "./appContext";
import { useLocation } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { FormattedDate } from "react-intl";
import ModalFooterVolunteer from "./modalFooterVolunteer";
import ModalFooterRemove from "./modalFooterRemove";

const DetailsModal = () => {
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
        <ModalBody>
          <p className="font-italic">
            <FormattedDate value={new Date(state.activeEvent?.startDate)} /> -{" "}
            <FormattedDate value={new Date(state.activeEvent?.endDate)} />
          </p>
          {state.activeEvent?.description}
        </ModalBody>
        {currentRoute === "/" ? (
          <ModalFooterVolunteer toggle={toggleModal} />
        ) : (
          <ModalFooterRemove toggle={toggleModal} />
        )}
      </Modal>
    </div>
  );
};

export default DetailsModal;
