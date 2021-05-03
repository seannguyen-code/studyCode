import React from "react";
import { useDispatch } from "react-redux";

import { addNote } from "../../store/actions/noteAction";
import useInput from "../../customhook/useInput";

const Form = () => {
  const [title, resetTitle, bindTitle] = useInput();
  const [content, resetContent, bindContent] = useInput();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNote({ title, content }));

    resetContent();
    resetTitle();
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
          <label htmlFor="note_content">Note Content</label>
        </div>
        <button className="btn green waves-effect waves-light ">Add</button>
      </form>
    </div>
  );
};

export default Form;
