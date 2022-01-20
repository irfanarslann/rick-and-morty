import { NetworkStatus } from "@apollo/client";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import CharacterItem from "./Components/CharacterItem";
import Filter from "./Components/Filter";
import Loading from "./Components/Loading";
import { useFetch } from "./utils/useFetch";
const App = () => {
  const [fullyLoaded, setFullyLoaded] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [filterModalActive, setfilterModalActive] = useState<boolean>(false);

  const { data, networkStatus, error, fetchMore } = useFetch({
    name,
    pageNumber,
  });

  if (networkStatus === NetworkStatus.loading) {
    return <Loading />;
  }

  if (error) {
    return <h3 className="error-message">{error.message}</h3>;
  }

  return (
    <>
      <div className="container">
        <Filter
          setName={setName}
          name={name}
          modalActive={filterModalActive}
          setfilterModalActive={setfilterModalActive}
          setPageNumber={setPageNumber}
        />
        <div className="filter-button">
          {name === "" ? <h1>Rick And Morty</h1> : <h1>{name}</h1>}

          <i
            className="fa fa-filter"
            aria-hidden="true"
            onClick={() => setfilterModalActive(true)}
          ></i>
        </div>

        <div className="list">
          {data &&
            data.characters.map((character: any) => (
              <CharacterItem key={character.id} character={character} />
            ))}
        </div>
        {data &&
          networkStatus !== NetworkStatus.fetchMore &&
          data.characters.length % 20 === 0 &&
          !fullyLoaded && (
            <InView
              onChange={async (inView) => {
                if (inView) {
                  const result = await fetchMore({
                    variables: {
                      pageNumber,
                      name,
                    },
                  });

                  setFullyLoaded(!result.data.characters.length);
                  setPageNumber(pageNumber + 1);
                }
              }}
            />
          )}
      </div>
    </>
  );
};

export default App;
