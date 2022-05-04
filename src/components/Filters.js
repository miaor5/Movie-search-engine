import FilterMovie from './FilterMovie';

function Filters(props) {
  return (
    <>
      <form>
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />
      </form>
    </>
  );
}
export default Filters;
