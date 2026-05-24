function countPassingJsBasicsChecks(results) {

    return results.filter(result =>
      result.toLowerCase().includes("pass")
    ).length;
  }