interface FilterButtonProps {
  name: string;
  setFilterModalActive: Function;
}

const FilterButton = ({ name, setFilterModalActive }: FilterButtonProps) => {
  return (
    <div className="filter-button">
      {name === "" ? <h1>Rick And Morty</h1> : <h1>{name}</h1>}

      <i
        className="fa fa-filter"
        aria-hidden="true"
        onClick={() => setFilterModalActive(true)}
      ></i>
    </div>
  );
};

export default FilterButton;
