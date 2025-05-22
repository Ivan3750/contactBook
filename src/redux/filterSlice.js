const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = ""

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
      return action.payload;
      },
    },
  },
});

export const {setFilter} = filterSlice.actions
export default filterSlice.reducer