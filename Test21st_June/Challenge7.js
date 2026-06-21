function questionName(input) {
  let responseTimes = input.responseTimes;
  let SLA_LIMIT = input.SLA_LIMIT;

  let i = 0;

  let total = responseTimes.length;
  let min = responseTimes[0];
  let max = responseTimes[0];
  let sum = 0;
  let breaches = 0;

  while (i < responseTimes.length) {
    let time = responseTimes[i];

    // sum for average
    sum += time;

    // min tracking
    if (time < min) {
      min = time;
    }

    // max tracking
    if (time > max) {
      max = time;
    }

    // SLA breach check
    if (time > SLA_LIMIT) {
      breaches++;
    }

    i++;
  }

  let avg = sum / total;
  let breachPercent = (breaches / total) * 100;

  let status =
    breaches === 0
      ? "✔ SLA MET"
      : "❌ SLA VIOLATED";

  return `Total Requests: ${total} Min Response: ${min}ms Max Response: ${max}ms SLA Breaches: ${breaches} (${breachPercent.toFixed(2)}%) Overall Status: ${status}`;
}