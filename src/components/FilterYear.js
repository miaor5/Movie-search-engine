function FilterYear(props) {
  const renderYear = () => {
    return props.getYear.map((year, index) => {
      return <option>{year}</option>;
    });
  };
  return (
    <>
      <label htmlFor="">Year</label>
      <div>{renderYear}</div>
      {/* <select name="" id="">
        <option value="All"></option>
        <option> </option>
      </select> */}
    </>
  );
}
export default FilterYear;
