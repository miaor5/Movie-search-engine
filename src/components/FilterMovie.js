function FilterMovie(props) {
  const handleSearch = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <div className="formFilterName">
      <label className="label">
        Movie:
        <input
          type="search"
          name="search"
          placeholder="Movie"
          onChange={handleSearch}
          value={props.searchMovie}
        />
      </label>
    </div>
  );
}
export default FilterMovie;
