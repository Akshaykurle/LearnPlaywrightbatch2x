function filterSupportedJsBasicsTopics(topics) {
  let aliasMap = {
    node: "node",
    runtime: "node",
    v8: "v8",
    engine: "v8",
    npm: "npm",
    "package-manager": "npm"
  };

  let result = [];

  for (let topic of topics) {
    let normalized = topic.trim().toLowerCase();

    if (aliasMap[normalized]) {
      let canonical = aliasMap[normalized];

      if (!result.includes(canonical)) {
        result.push(canonical);
      }
    }
  }

  return result;
}