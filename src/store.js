import { configureStore } from "@reduxjs/toolkit";
import noteSlice from './Slice/Note.Slice'

const reducer = {
    note: noteSlice
};

const store = configureStore({
    reducer
});

export default store;