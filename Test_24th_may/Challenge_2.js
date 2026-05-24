function isValidJsBasicsIdentifier(Akshay) {
    let trimmed = Akshay.trim();

    if (trimmed === "") {
      return false;
    }

    let reservedWords = [
      "let",
      "const",
      "var",
      "class",
      "function",
      "return"
    ];

    if (reservedWords.includes(trimmed)) {
      return false;
    }

    // Validate identifier pattern
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(trimmed);
  }