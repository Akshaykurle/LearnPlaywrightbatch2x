function questionName(input) {
  let maxAttempts = 5;
  let attempt = 0;
  let success = false;
  let logs = "";

  do {
    attempt++;

    let randomValue = Math.random();

    if (randomValue > 0.6) {
      success = true;
      logs += `Attempt ${attempt}: SUCCESS (Response 200 OK) `;
      break;
    } else {
      logs += `Attempt ${attempt}: FAILED (Timeout/Error) `;
    }

  } while (attempt < maxAttempts);

  if (success) {
    logs += `API call PASSED after ${attempt} attempt(s).`;
  } else {
    logs += `API call FAILED after ${maxAttempts} attempt(s).`;
  }

  return logs;
}