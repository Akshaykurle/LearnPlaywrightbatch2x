function getJsBasicsKeywordMeaning(term) {
    let normalized = term.trim().toLowerCase();

    let keywords = {
      node: "runtime",
      v8: "engine",
      npm: "package-manager"
    };

  return keywords [normalized] || "unknown";
  }