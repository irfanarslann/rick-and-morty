import { useQuery } from "@apollo/client";
import { LIST_CHARACTERS } from "./CharactersQuery";

interface FetchParams {
  name?: string;
  offset: number;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  url: string;
  episode: string[];
  created: string;
}

interface Characters {
  characters: Character[];
}

export const useFetch = (params: FetchParams) => {
  const { data, networkStatus, error, fetchMore, variables, loading } =
    useQuery<Characters>(LIST_CHARACTERS, {
      notifyOnNetworkStatusChange: true,
      variables: params,
    });

  return { data, networkStatus, error, fetchMore, variables, loading };
};
