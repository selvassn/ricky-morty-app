import debounce from "lodash.debounce";
import React, { useState, useMemo } from "react";
import { ICharacterFilter } from "../../core/interface/ICharacters";

const CharacterFilter = (props: any) => {
  let filterData: ICharacterFilter = props.filterData;
  const [, setFilterObj] = useState<ICharacterFilter>(filterData);

  /**
   * Handler for search box changes
   * @param event 
   */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterData.name = event.target.value;
    setFilterObj((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
    props.filterCallback(filterData);
  };

  /**
   * Handler for dropdown changes
   * @param event 
   */
  const handleGenderChange = (event: any) => {
    filterData.gender = event.target.value;
    setFilterObj((prevState) => ({
      ...prevState,
      gender: event.target.value,
    }));
    props.filterCallback(filterData);
  }

  const debouncedHandler = useMemo(() => debounce(handleSearchChange, 300), [props.filterData.name]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <div className="row d-flex my-4 justify-content-md-center">
        <input
          className="col-md-2 mx-2"
          onChange={debouncedHandler}
          type="search"
          placeholder="Search"
          defaultValue={props.filterData.name}
          aria-label="Search"
        ></input>

        <select
          className="col-md-2 mx-2 mt-2 my-md-0"
          defaultValue={props.filterData.gender}
          onChange={handleGenderChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
    </React.Fragment>
  );
};
export default React.memo(CharacterFilter);
