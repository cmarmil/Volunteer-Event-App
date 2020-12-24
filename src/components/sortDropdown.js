import { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const SortDropdown = (props) => {
  const [isOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <ButtonDropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret outline color="primary">
        Sort By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Date</DropdownItem>
        <DropdownItem>Event Type</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default SortDropdown;
