import { NetworkStatus } from "@apollo/client";
import { useState } from "react";

import CharacterList from "./Components/CharacterList";
import Filter from "./Components/Filter";
import FilterButton from "./Components/FilterButton";
import Loading from "./Components/Loading";
import { useFetch } from "./utils/useFetch";
const App = () => {
  const [offset, setOffset] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [filterModalActive, setFilterModalActive] = useState<boolean>(false);

  const { data, networkStatus, error, fetchMore } = useFetch({
    offset,
    name,
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
          setfilterModalActive={setFilterModalActive}
          setOffset={setOffset}
        />
        <FilterButton name={name} setFilterModalActive={setFilterModalActive} />

        <CharacterList
          data={data}
          fetchMore={fetchMore}
          name={name}
          networkStatus={networkStatus}
        />
      </div>
    </>
  );
};

export default App;
