import { provideApolloClient, useMutation } from "@vue/apollo-composable";
import { apolloClient } from "@/utils/apollo-client";
import gql from "graphql-tag";

describe("TestUserService", function () {
  beforeAll(() => {
    console.log("Creating client");
    provideApolloClient(apolloClient);
  });
  it("should return pong", function () {
    const { mutate: login } = useMutation(gql`
      mutation Login($email: String!, $password: String!) {
        user: login(loginForm: { email: $email, password: $password }) {
          nickname
        }
      }
    `);
    console.log(
      login({
        email: "jecosine@gmail.com",
        password: "114514",
      })
    );
  });
});
