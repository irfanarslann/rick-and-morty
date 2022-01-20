import {
  ApolloProvider as Provider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { FC } from "react";
import { offsetLimitPagination } from "@apollo/client/utilities";
const ApolloProvider: FC = ({ children }) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            characterPast: offsetLimitPagination(),
          },
        },
      },
    }),
  });

  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
