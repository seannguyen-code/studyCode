import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import useInput from "../../customhook/useInput";
import { updateNote } from "../../store/actions/noteAction";

const EditForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const note = useSelector((state) => state.note);
  const [title, resetTitle, bindTitle] = useInput(note.title);
  const [content, resetContent, bindContent] = useInput(note.content);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateNote({ ...note, title, content }));

    resetContent();
    resetTitle();
    history.push("/");
  };

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="input-field">
          <input {...bindTitle} value={title} id="note_title" type="text" className="validate" />
          <label className="active" htmlFor="note_title">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea {...bindContent} value={content} id="note_content" className="materialize-textarea"></textarea>
          <label className="active" htmlFor="note_content">
            Note Content
          </label>
        </div>
        <button className="btn green waves-effect waves-light ">Update</button>
      </form>
    </div>
  );
};

export default EditForm;
