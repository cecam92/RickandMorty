import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

async function FetchGQL(props) {
  console.log(`props in fetch ${props}`);
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
    cache: new InMemoryCache(),
  });

  const result = await client.query({
    query: gql`
      {
        characters(filter: { name: "${props}" }) {
          results {
            name
            id
            status
            image
            origin {
              name
            }
          }
        }
      }
    `,
  });

  const characters = result.data.characters.results;

  return characters;
}
export default FetchGQL;
