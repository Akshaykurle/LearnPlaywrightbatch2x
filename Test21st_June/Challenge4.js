function questionName(input) {
  let isPresent = input.isPresent;
  let isDisplayed = input.isDisplayed;
  let isEnabled = input.isEnabled;

  let status;
  let severity;
  let action;

  if (isPresent === false) {
    status = "NOT FOUND";
    severity = "CRITICAL";
    action = "Element not found in DOM. Check locator or page load.";
  } 
  else if (isPresent === true && isDisplayed === false) {
    status = "HIDDEN";
    severity = "WARNING";
    action = "Element exists but is not visible. Check UI rendering or scroll state.";
  } 
  else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    status = "DISABLED";
    severity = "WARNING";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
  } 
  else if (isPresent === true && isDisplayed === true && isEnabled === true) {
    status = "READY";
    severity = (isEnabled === true && isDisplayed === true)
      ? "OK"
      : "WARNING";

    action = "Element is ready for interaction.";
  }

  return `Status: ${status} Severity: ${severity} Action: ${action}`;
}