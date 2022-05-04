import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
function Filters(props) {
  return (
    <>
      <form>
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />
        <FilterYear getYear={props.getYear} />
      </form>
    </>
  );
}
export default Filters;
