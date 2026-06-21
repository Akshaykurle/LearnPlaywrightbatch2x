function questionName(input) {
  let pass = 0;
  let fail = 0;
  let skip = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "pass") {
      pass++;
    } else if (input[i] === "fail") {
      fail++;
    } else if (input[i] === "skip") {
      skip++;
    }
  }

  let total = input.length;
  let passRate = (pass / total) * 100;

  let verdict;

  if (fail === 0) {
    verdict = "READY FOR RELEASE: All tests passed.";
  } else if (fail <= 2) {
    verdict = "Minor failures. Review before release.";
  } else {
    verdict = "BLOCK RELEASE: Too many failures.";
  }

  let result =
    `Total Tests : ${total} ` +
    `Passed: ${pass} ` +
    `Failed: ${fail} ` +
    `Skipped: ${skip} ` +
    `Pass Rate: ${passRate.toFixed(2)}% ` +
    `VERDICT: ${verdict}`;

  return result;
}