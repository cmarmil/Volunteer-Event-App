import { useContext, useState } from "react";
import { Button, ModalFooter } from "reactstrap";
import CheckmarkIcon from "./checkmarkIcon";
import { store } from "./appContext";

function ModalFooterRemove(props) {
  const { state, dispatch } = useContext(store);
  const [isSuccess, setSuccess] = useState(false);

  function removeClick() {
    dispatch({ type: "REMOVE_EVENT", payload: state.activeEvent });
    setSuccess(true);
    setTimeout(() => {
      props.toggle();
    }, 400);
  }

  const SuccessButtonContent = (
    <>
      Removed! <CheckmarkIcon />{" "}
    </>
  );

  return (
    <ModalFooter>
      <Button
        color={isSuccess ? "success" : "danger"}
        onClick={removeClick}
      >
        {isSuccess ? SuccessButtonContent : "Remove"}
      </Button>{" "}
      <Button color="secondary" onClick={props.toggle}>
        Cancel
      </Button>
    </ModalFooter>
  );
}

export default ModalFooterRemove;
