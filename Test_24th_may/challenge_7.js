function summarizeJsBasicsResults(results) {
  let normalizedResults = results.map(result =>
    result.toLowerCase()
  );

  return {
    total: results.length,
    passed: normalizedResults.filter(result =>
      result.includes("pass")
    ).length,
    failed: normalizedResults.filter(result =>
      result.includes("fail")
    ).length,
    skipped: normalizedResults.filter(result =>
      result.includes("skip")
    ).length
  };
}
