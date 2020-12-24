import { useState, useContext } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { store } from "./appContext";

const SortDropdown = () => {
  const [isOpen, setDropdownOpen] = useState(false);
  const { dispatch } = useContext(store);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <ButtonDropdown isOpen={isOpen} toggle={toggle} className="mr-2">
      <DropdownToggle caret outline color="primary">
        Sort By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          onClick={() =>
            dispatch({ type: "SORT_BY_ASCENDING_DATE", payload: null })
          }
        >
          Date (Ascending)
        </DropdownItem>
        <DropdownItem
          onClick={() =>
            dispatch({ type: "SORT_BY_DESCENDING_DATE", payload: null })
          }
        >
          Date (Descending)
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default SortDropdown;
