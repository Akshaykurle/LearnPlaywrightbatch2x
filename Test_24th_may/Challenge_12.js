function createUniqueJsBasicsTags(tags) {
  let result = [];

  for (let tag of tags) {
    let normalized = tag.trim().toLowerCase();

    if (normalized !== "" && !result.includes(normalized)) {
      result.push(normalized);
    }
  }

  return result;
}