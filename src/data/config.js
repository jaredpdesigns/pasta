require("dotenv").config();
module.exports = function () {
  return {
    openAIAPIKey: process.env.OPENAI_API_KEY,
  };
};
