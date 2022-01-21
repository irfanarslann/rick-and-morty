import {
  ApolloProvider as Provider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { FC } from "react";
const ApolloProvider: FC = ({ children }) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
