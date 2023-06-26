import { useSelector } from "react-redux";
import React from "react";
import '../style/noteList.scss'
import { Button } from "react-bootstrap";
import { removeANote } from "../Slice/Note.Slice";
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from "react-router-dom";

const NotesList = () => {
    const note = useSelector(state => state.note);
    const dispatch = useDispatch();

    const removeNote = (id) => {
        dispatch(removeANote(id));
    }

    return (
        <>
            {
                Object.values(note)[0].map((item => {
                    return (
                        <div key={item.id} className="notes">
                            <span className="title">{item.title}</span>
                            <div className="buttons">
                                <Link to={item.id}> <Button >Show Detail</Button></Link >
                                <Button onClick={() => removeNote(item.id)}>Remove Note</Button>
                            </div>

                            <Routes>
                                <Route path={item.id} element={
                                    <div className="showDetail">
                                        Details: {item.details}
                                    </div>
                                } />
                            </Routes>
                        </div>
                    )
                }))
            }
        </>
    );
}

export default NotesList;