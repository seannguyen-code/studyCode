import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteNote, toggleFav } from "../../store/actions/noteAction";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => dispatch(deleteNote(note));
  const toggleFavHandler = () => dispatch(toggleFav(note));
  const editNoteHandler = () => dispatch({ type: "EDIT_NOTE", payload: note });

  const favoriteMarkup = note.favorite ? "favorite" : "favorite_border";

  return (
    <div className="note white">
      <div className="right-align">
        <i style={{ cursor: "pointer" }} className="material-icons red-text" onClick={toggleFavHandler}>
          {favoriteMarkup}
        </i>
        <i style={{ cursor: "pointer" }} className="material-icons" onClick={deleteNoteHandler}>
          delete
        </i>
      </div>
      <Link to={`/note/${note.id}`}>
        <h5 className="black-text">{note.title}</h5>
      </Link>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
      <div className="right-align">
        <Link to={`/editform/${note.id}`}>
          <i className="material-icons black-text" onClick={editNoteHandler}>
            edit
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Note;
