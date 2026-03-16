import React, { useState, useEffect, useContext } from "react";
import NewSelect from "../../../helpers/NewSelect";
import { DataContext } from "./../../../context/dataContext";
import { useNavigate } from "react-router-dom";

const SearchUser = () => {
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState([]);
  const context = useContext(DataContext);

  useEffect(() => {
    const users = context.users;
    const options = users.map((user) => ({ label: user.name, value: user.id }));
    setOptions(options);
  }, [context.users]);

  const history = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    history(`/user/${value[0].value}`);
    setValue([]);
  };

  return (
    <>
      <form className="self-center content-end" onSubmit={(e) => onSubmit(e)}>
        <NewSelect
          labelKey={"label"}
          name={"searchUser"}
          label={"Search"}
          options={options}
          value={value}
          onChange={(selected) => setValue(selected)}
          />
        <button type={"submit"} variant="dark">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchUser;
