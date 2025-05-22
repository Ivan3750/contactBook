const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState = []

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteContact: {
      reducer(state, action){
              return state.filter(contact => contact.id !== action.payload);

      }
    }
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer