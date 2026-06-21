function questionName(input) {
  let frequency = input.frequency;
  let impact = input.impact;

  let severity;
  let message;

  if (frequency === "always") {
    if (impact === "blocker") {
      severity = "P0";
      message = "Critical: Stop release immediately";
    } 
    else if (impact === "major") {
      severity = "P1";
      message = "High: Fix before release";
    } 
    else {
      severity = "P2";
      message = "Medium: Fix in next sprint";
    }
  } 
  else if (frequency === "often") {
    if (impact === "blocker") {
      severity = "P1";
      message = "High: Fix before release";
    } 
    else if (impact === "major") {
      severity = "P2";
      message = "Medium: Fix in next sprint";
    } 
    else {
      severity = "P3";
      message = "Low: Minor issue";
    }
  } 
  else if (frequency === "rarely") {
    if (impact === "blocker") {
      severity = "P2";
      message = "Medium: Fix in next sprint";
    } 
    else if (impact === "major") {
      severity = "P3";
      message = "Low: Minor issue";
    } 
    else {
      severity = "P4";
      message = "Very Low: Cosmetic issue";
    }
  }

  return `Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: ${severity} - ${message}`;
}