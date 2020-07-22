const env = require('./__env__');

const config = {
  dev: {
    auth: true,
    useAPI: true,
    baseUrl: "https://servicesdev.na.cargill.com:8443/A003532/cascna/workordersoffline",
    redirectUrl: "https://servicesdev.na.cargill.com:8443/A003532/cascna/workordersoffline/",
    refererUrl: "https://dev.cargill.com",
    networkTestUrl: "https://www.cargill.com",
    ADTenant: "57368c21-b8cf-42cf-bd0b-43ecd4bc62ae",
    ADClientId: "8715b133-c362-4951-b4cc-8f4891dd25fc",
    ADClientSecret: "49rl/DRgbxZqzD5NXcwA5hY_jV]pqcl]"
  },
  qaOld: {
    auth: true,
    useAPI: true,
    baseUrl: "https://servicesqa.na.cargill.com:8443/A003532/cascna/workordersoffline",
    redirectUrl: "https://servicesdev.na.cargill.com:8443/A003532/cascna/workordersoffline/",
    refererUrl: "https://qa.cargill.com",
    networkTestUrl: "https://www.cargill.com",
    ADTenant: "57368c21-b8cf-42cf-bd0b-43ecd4bc62ae",
    ADClientId: "8715b133-c362-4951-b4cc-8f4891dd25fc",
    ADClientSecret: "49rl/DRgbxZqzD5NXcwA5hY_jV]pqcl]"
  },
  prod: {
    auth: true,
    useAPI: true,
    baseUrl: "https://services.na.cargill.com:8443/A003532/cascna/workordersoffline",
    redirectUrl: "https://servicesdev.na.cargill.com:8443/A003532/cascna/workordersoffline/",
    refererUrl: "https://app.cargill.com",
    networkTestUrl: "https://www.cargill.com",
    ADTenant: "57368c21-b8cf-42cf-bd0b-43ecd4bc62ae",
    ADClientId: "8715b133-c362-4951-b4cc-8f4891dd25fc",
    ADClientSecret: "49rl/DRgbxZqzD5NXcwA5hY_jV]pqcl]"
  },
  qa: {
    auth: true,
    useAPI: true,
    baseUrl: "https://servicesqa.na.cargill.com:8443/A003532/cascna/workordersoffline",
    redirectUrl: "https://servicesqa.na.cargill.com:8443/A003532/cascna/workordersoffline/",
    refererUrl: "https://qa.cargill.com",
    networkTestUrl: "https://www.cargill.com",
    ADTenant: "57368c21-b8cf-42cf-bd0b-43ecd4bc62ae",
    ADClientId: "551ef9be-8035-4167-a5b6-a0e3d238e07a",
    ADClientSecret: "rR-H0N3-3j/8TFxWL?0Q_u2y[PTBhP.-"
  },
  prodNew: {
    auth: true,
    useAPI: true,
    baseUrl: "https://services.na.cargill.com:8443/A003532/cascna/workordersoffline",
    redirectUrl: "https://services.na.cargill.com:8443/A003532/cascna/workordersoffline/",
    refererUrl: "https://app.cargill.com",
    networkTestUrl: "https://www.cargill.com",
    ADTenant: "57368c21-b8cf-42cf-bd0b-43ecd4bc62ae",
    ADClientId: "356de017-6799-40b7-9e2a-c8b5fe603dfd",
    ADClientSecret: "cJgce_fI9=T985:JP.6N.FW8o[etky9v"
  },
  mock: {
    auth: false,
    useAPI: false,
    baseUrl: "http://localhost:9999",
    refererUrl: "https://app.cargill.com",
    networkTestUrl: "https://www.cargill.com",
    ADTenant: "57368c21-b8cf-42cf-bd0b-43ecd4bc62ae",
    ADClientId: "8715b133-c362-4951-b4cc-8f4891dd25fc",
    ADClientSecret: "49rl/DRgbxZqzD5NXcwA5hY_jV]pqcl]"
  }
};

module.exports = (() => {

  const { CARGILL_MODE } = env;
  const valid = ['dev', 'qa', 'prod', 'mock'].indexOf(CARGILL_MODE) != -1;
  if (!valid) {
    throw Error(`Invalid mode '${CARGILL_MODE}' specified in environment variable CARGILL_MODE`);
  }

  return {
    mode: CARGILL_MODE,
    isDev: CARGILL_MODE === "dev",
    isQa: CARGILL_MODE === "qa",
    isProd: CARGILL_MODE === "prod",
    isMock: CARGILL_MODE === "mock",
    config: { ...config[CARGILL_MODE] },
    version: "0.0.1"
  };
})();

