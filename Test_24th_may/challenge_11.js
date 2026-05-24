function summarizeJsBasicsMatrix(matrix) {
  let flatResults = matrix.flat();

  let passed = 0;
  let failed = 0;
  let failedCases = [];

  for (let result of flatResults) {
    let normalized = result.toLowerCase();

    if (normalized.includes("pass")) {
      passed++;
    }

    if (normalized.includes("fail")) {
      failed++;
      failedCases.push(result);
    }
  }

  return {
    total: flatResults.length,
    passed: passed,
    failed: failed,
    failedCases: failedCases
  };
}