function questionName(input) {
  const env = input;

  let baseUrl;
  let apiKey;
  let timeout;
  let description;
  let envName;

  switch (env) {
    case "dev":
      envName = "DEV";
      baseUrl = "https://dev-api.testingacademy.com";
      apiKey = "dev_key_xxxx-xxxx";
      timeout = 5000;
      description = "Development - Local testing environment";
      break;

    case "staging":
      envName = "STAGING";
      baseUrl = "https://staging-api.testingacademy.com";
      apiKey = "stg_key_xxxx-xxxx";
      timeout = 8000;
      description = "Staging - Pre-production mirror";
      break;

    case "qa":
      envName = "QA";
      baseUrl = "https://qa-api.testingacademy.com";
      apiKey = "qa_key_xxxx-xxxx";
      timeout = 7000;
      description = "QA - Quality assurance testing environment";
      break;

    case "prod":
    case "production":
      envName = "PRODUCTION";
      baseUrl = "https://api.testingacademy.com";
      apiKey = "prod_key_xxxx-xxxx";
      timeout = 10000;
      description = "Production - Live environment";
      break;

    default:
      envName = "UNKNOWN";
      baseUrl = "N/A";
      apiKey = "N/A";
      timeout = 0;
      description = "Invalid environment";
  }

  return `Environment: ${envName} Base URL: ${baseUrl} API Key: ${apiKey} Timeout: ${timeout}ms Description: ${description}`;
}