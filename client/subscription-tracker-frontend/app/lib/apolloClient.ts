// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const GRAPHQL_URL: string =
  process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:4000/graphql";

// export both a factory and a singleton getter
export function createApolloClient(): ApolloClient {
  return new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_URL,
      credentials: "include",
    }),
    cache: new InMemoryCache(),
  });
}

let apolloClient: ApolloClient | null = null;

export function getApolloClient(): ApolloClient {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
}
