function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
  let mergedConfig = {
    ...defaultConfig,
    ...overrideConfig
  };

  if (mergedConfig.retries === undefined) {
    mergedConfig.retries = 0;
  }

  return mergedConfig;
}