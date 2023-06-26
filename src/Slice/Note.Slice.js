import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: []
    },
    reducers: {
        addNewNote(state, action) {
            let currentNote = {
                id: action.payload.id,
                title: action.payload.title,
                details: action.payload.details,
                isShow: false
            };

            state.notes = [...state.notes, currentNote];
        },
        removeANote(state, action) {
            state.notes = state.notes.filter(item => item.id !== action.payload);
        },

    }
});

export const { addNewNote, removeANote } = noteSlice.actions;

export default noteSlice.reducer;