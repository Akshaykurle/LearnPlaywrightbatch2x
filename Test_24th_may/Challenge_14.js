function buildJsBasicsChecklist(items) {
  let result = [];
  let count = 1;

  for (let item of items) {
    let trimmedItem = item.trim();

    if (trimmedItem !== "") {
      result.push(count + ". " + trimmedItem + " - TODO");
      count++;
    }
  }

  return result;
}