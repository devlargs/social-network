const { fetchTypeDefs } = require("apollo-mocked-provider");

(async () => {
  await fetchTypeDefs({
    uri: `${process.env.GRAPHCMS_ENDPOINT}`,
    typescript: false,
    path: "interfaces/typeDefs.ts",
  });
})();
