import SortDropdown from "./sortDropdown";
import LocaleDropdown from "./localeDropdown";
import FilterCheckboxes from "./filterCheckboxes";
import { Container } from "reactstrap";

function SettingsButtons() {
  return (
    <Container fluid className="d-md-flex align-items-center mt-2">
      <div className="mr-3">
        <SortDropdown />
        <LocaleDropdown />
      </div>
      <FilterCheckboxes />
    </Container>
  );
}

export default SettingsButtons;
