import { useContext } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { store } from "./appContext";

const FilterCheckBoxes = () => {
  const { dispatch } = useContext(store);

  return (
    <Form>
      <FormGroup check inline>
        <Label check>
          <Input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTERS",
                payload: { checked: e.target.checked, name: "teaching" },
              })
            }
            defaultChecked={true}
          />{" "}
          Teaching
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTERS",
                payload: { checked: e.target.checked, name: "hackathon" },
              })
            }
            defaultChecked={true}
          />{" "}
          Hackathon
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FILTERS",
                payload: { checked: e.target.checked, name: "project" },
              })
            }
            defaultChecked={true}
            type="checkbox"
          />{" "}
          Project
        </Label>
      </FormGroup>
    </Form>
  );
};

export default FilterCheckBoxes;
