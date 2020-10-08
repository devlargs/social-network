const { fetchTypeDefs } = require("apollo-mocked-provider");

(async () => {
  console.log("> Job: Downloading GraphQL Server schema");
  console.log(`> Url: ${process.env.GRAPHCMS_ENDPOINT}`);
  await fetchTypeDefs({
    uri: `${process.env.GRAPHCMS_ENDPOINT}`,
    typescript: false,
    path: "interfaces/typeDefs.ts",
  });
  console.log("> Job done!");
})();
