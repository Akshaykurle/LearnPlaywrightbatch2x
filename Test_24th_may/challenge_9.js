function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    return (
      suiteName.trim() +
      " | " +
      environment.trim().toLowerCase() +
      " | build-" +
      buildNumber
    );
  }