// Add Apollo Client to this file
import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const client = new ApolloClient({
    // uri:`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    uri:`https://ibportfolio-api.shubhisaran.repl.co/graphql`,
    cache: new InMemoryCache(),
})

export default client;