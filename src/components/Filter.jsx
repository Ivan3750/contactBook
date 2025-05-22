import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filterSlice";

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <input
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Пошук"
    />
  );
};

export default Filter;
