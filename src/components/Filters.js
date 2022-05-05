import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
function Filters(props) {
  return (
    <>
      <form>
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
    </>
  );
}
export default Filters;
