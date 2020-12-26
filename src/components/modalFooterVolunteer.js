import { useContext, useState } from "react";
import { Button, ModalFooter } from "reactstrap";
import CheckmarkIcon from "./checkmarkIcon";
import { store } from "./appContext";

function ModalFooterVolunteer(props) {
  const { state, dispatch } = useContext(store);
  const [isSuccess, setSuccess] = useState(false);

  function volunteerClick() {
    dispatch({ type: "ADD_EVENT", payload: state.activeEvent });
    setSuccess(true);
    setTimeout(() => {
      props.toggle();
    }, 400);
  }

  const SuccessButtonContent = (
    <>
      Success! <CheckmarkIcon />{" "}
    </>
  );

  return (
    <ModalFooter>
      <Button
        color={isSuccess ? "success" : "primary"}
        onClick={volunteerClick}
      >
        {isSuccess ? SuccessButtonContent : "Volunteer"}
      </Button>{" "}
      <Button color="secondary" onClick={props.toggle}>
        Cancel
      </Button>
    </ModalFooter>
  );
}

export default ModalFooterVolunteer;
