import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
function Filters(props) {
  const handleSubmit = (ev) => {
    console.log('holis');
    ev.preventDefault();
  };
  return (
    <form className="formFilters" onSubmit={handleSubmit}>
      <FilterMovie
        handleFilterMovie={props.handleFilterMovie}
        searchMovie={props.searchMovie}
      />
      <FilterYear
        getYear={props.getYear}
        handleFilterYear={props.handleFilterYear}
        filterYears={props.filterYears}
      />
    </form>
  );
}
export default Filters;
