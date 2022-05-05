function FilterYear(props) {
  const renderYear = () => {
    return props.getYear.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };

  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  return (
    <>
      <label className="label">Year:</label>
      <select name="" id="" onChange={handleChange} value={props.filterYears}>
        <option value="0">Seleccione el año</option>
        {renderYear()}
      </select>
    </>
  );
}
export default FilterYear;
