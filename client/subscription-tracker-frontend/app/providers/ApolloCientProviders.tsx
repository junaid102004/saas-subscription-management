// app/providers/ApolloProviderClient.tsx
"use client";

import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { getApolloClient } from "../lib/apolloClient"; // <- use this relative path

interface Props {
  children: ReactNode;
}

export default function ApolloProviderClient({ children }: Props) {
  const client = getApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
