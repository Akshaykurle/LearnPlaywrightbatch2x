function questionName(input) {
  const validUsername = input.valid.username;
  const validPassword = input.valid.password;
  const attempts = input.attempts;

  const MAX_FAILS = 3;

  var failCount = 0;
  var i = 0;
  let logs = "";
  let locked = false;

  do {
    if (i >= attempts.length) {
      break;
    }

    let attempt = attempts[i];

    if (locked === true) {
      logs += `Attempt ${i + 1}: 🔒 ACCOUNT LOCKED - Rejected `;
    } else if (
      attempt.username === validUsername &&
      attempt.password === validPassword
    ) {
      logs += `Attempt ${i + 1}: ✅ SUCCESS - Login Granted `;
      failCount = 0; // reset on success
    } else {
      failCount++;
      logs += `Attempt ${i + 1}: ❌ FAILED - Strike ${failCount}/${MAX_FAILS} `;

      if (failCount === MAX_FAILS) {
        locked = true;
        logs += `🚨 ACCOUNT LOCKED `;
      }
    }

    i++;
  } while (i < attempts.length);

  return logs.trim();
}