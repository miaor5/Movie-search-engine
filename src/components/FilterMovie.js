function FilterMovie(props) {
  //   const handleSearch = (ev) => {
  //     props.handleFilterMovie(ev.target.value);
  //   };
  return (
    <label>
      Movie
      <input
        autoComplete="off"
        type="search"
        name="search"
        placeholder="Movie"
        //   onChange={handleSearch}
      />
    </label>
  );
}
export default FilterMovie;
