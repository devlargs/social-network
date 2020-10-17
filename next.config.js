const {
  GRAPHCMS_ENDPOINT,
  GRAPHCMS_TOKEN,
  JWT_PRIVATE_KEY,
  VERIFY_AUTH_URL,
} = process.env;

module.exports = {
  env: {
    GRAPHCMS_ENDPOINT,
    GRAPHCMS_TOKEN,
    JWT_PRIVATE_KEY,
    VERIFY_AUTH_URL,
  },
};
