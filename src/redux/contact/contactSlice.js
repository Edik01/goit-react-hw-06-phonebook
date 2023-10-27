const { createSlice } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },

  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const { addContact, changeFilter, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
