import dotenv from "dotenv";
import * as path from "path";

describe("Test for tests", () => {
  it("temp get env with dotenv config", () => {
    console.log(process.env.NODE_ENV, process.env.VUE_APP_GQL_QUERTY_URL);
  });
  it("temp get env without dotenv config", () => {
    // dotenv.config();
    console.log(process.env.NODE_ENV, process.env.APP_TITLE);
  });
});
