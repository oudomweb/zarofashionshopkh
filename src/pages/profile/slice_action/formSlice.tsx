// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const emptyFormState = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

const savedForm = localStorage.getItem("formData");
const initialState = savedForm ? JSON.parse(savedForm) : emptyFormState;

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => emptyFormState,
  },
});

export const { setFormField, resetForm } = formSlice.actions;
export default formSlice.reducer;
