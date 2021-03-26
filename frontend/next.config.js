/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');

module.exports = {
  env: {
    apiUrl: process.env.API_URL,
    googleClientID: process.env.GOOGLE_CLIENT_ID,
  },
  i18n,
};
