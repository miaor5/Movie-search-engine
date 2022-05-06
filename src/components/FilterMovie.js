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
          placeholder="Ejem: Cars"
          onChange={handleSearch}
          value={props.searchMovie}
          className="inputTexto"
        />
      </label>
    </div>
  );
}
export default FilterMovie;
