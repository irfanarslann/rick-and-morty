import { useQuery } from "@apollo/client";
import { LIST_CHARACTERS } from "./CharactersQuery";

type FetchParams = {
  name?: string;
  pageNumber: number;
};

export const useFetch = (params: FetchParams) => {
  const { data, networkStatus, error, fetchMore, variables } = useQuery(
    LIST_CHARACTERS,
    {
      notifyOnNetworkStatusChange: true,
      variables: params,
    }
  );

  return { data, networkStatus, error, fetchMore, variables };
};
