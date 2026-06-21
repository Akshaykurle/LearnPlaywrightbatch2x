function questionName(input) {
  let tests = input;
  let total = tests.length;

  var pass = 0;
  var fail = 0;
  var error = 0;

  let i = 0;
  let report = "";
  let firstFailureFound = false;
  let firstFailureIndex = -1;

  let consecutivePass = 0;

  // do...while to find FIRST failure
  do {
    if (i >= total) break;

    let t = tests[i];
    let result = false;

    try {
      switch (t.type) {
        case "strictEqual":
          result = t.actual === t.expected;
          break;

        case "looseEqual":
          result = t.actual == t.expected;
          break;

        case "typeCheck":
          result = typeof t.actual === t.expected;
          break;

        case "truthy":
          result = t.actual ? true : false;
          break;

        case "lessThan":
          result = t.actual < t.expected;
          break;

        default:
          result = false;
      }

      if (result) {
        pass++;
        consecutivePass++;
        report += `✅ TC-${String(i + 1).padStart(2, "0")}: ${t.name} → PASS `;
      } else {
        fail++;
        consecutivePass = 0;

        report += `❌ TC-${String(i + 1).padStart(2, "0")}: ${t.name} → FAIL `;

        if (!firstFailureFound) {
          firstFailureFound = true;
          firstFailureIndex = i + 1;
        }
      }

    } catch (e) {
      error++;
      report += `⚠️ TC-${String(i + 1).padStart(2, "0")}: ${t.name} → ERROR `;
    }

    i++;
  } while (i < total);

  // while loop for consecutive passes from start
  let j = 0;
  let startPassCount = 0;

  while (j < total) {
    let t = tests[j];

    let result = false;

    if (t.type === "strictEqual") {
      result = t.actual === t.expected;
    } else if (t.type === "looseEqual") {
      result = t.actual == t.expected;
    } else if (t.type === "typeCheck") {
      result = typeof t.actual === t.expected;
    } else if (t.type === "truthy") {
      result = !!t.actual;
    } else if (t.type === "lessThan") {
      result = t.actual < t.expected;
    }

    if (result) {
      startPassCount++;
      j++;
    } else {
      break;
    }
  }

  let passRate = (pass / total) * 100;

  let overall =
    fail === 0 && error === 0
      ? "✔ PASSED"
      : fail <= 2
      ? "⚠ PARTIAL FAIL"
      : "❌ FAILED";

  return (
    report.trim() +
    ` First Failure At: ${firstFailureFound ? firstFailureIndex : "NONE"} ` +
    `Consecutive Pass From Start: ${startPassCount} ` +
    `Pass Rate: ${passRate.toFixed(2)}% ` +
    `Overall: ${overall}`
  );
}