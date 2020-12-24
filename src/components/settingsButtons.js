import SortDropdown from "./sortDropdown";
import LocaleDropdown from "./localeDropdown";

function SettingsButtons() {
  return (
    <div className="settingsButtons-container">
      <SortDropdown />
      <LocaleDropdown />
    </div>
  );
}

export default SettingsButtons;
