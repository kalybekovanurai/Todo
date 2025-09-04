import "../styles/global.css"

type Props = {
  filter: "all" | "completed" | "active";
  setFilter: (filter: "all" | "completed" | "active") => void;
};

const FilterBar = ({ setFilter }: Props) => {
  return (
    <>
      <div className="filter-button">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("active")}>Active</button>
      </div>
    </>
  );
};

export default FilterBar;
