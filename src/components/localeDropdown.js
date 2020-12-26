import { useState, useContext } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { store } from "./appContext";

const LocaleDropdown = (props) => {
  const { state, dispatch } = useContext(store);
  const [isOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <ButtonDropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret outline color="primary">
        Date Format
      </DropdownToggle>
      <DropdownMenu>
        {state.localeList.map((locale) => (
          <DropdownItem
            key={locale.localeName}
            onClick={() =>
              dispatch({ type: "UPDATE_LOCALE", payload: locale.localeStr })
            }
          >
            {locale.localeName}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default LocaleDropdown;
