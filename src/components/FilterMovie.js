function FilterMovie(props) {
  const handleSearch = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <form>
      <label>
        Movie
        <input
          type="search"
          name="search"
          placeholder="Movie"
          onChange={handleSearch}
          value={props.searchMovie}
        />
      </label>
    </form>
  );
}
export default FilterMovie;
