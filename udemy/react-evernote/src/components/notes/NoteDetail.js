import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

const NoteDetail = (props) => {
  const id = props.match.params.id;
  useFirestoreConnect([{ collection: "notes", doc: id }]);
  //   const note = useSelector((state) => state.firestore.ordered.notes);
  const note = useSelector(({ firestore: { data } }) => data.notes && data.notes[id]);

  const noteMarkup = !isLoaded(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Loading...</span>
        </div>
        <div className="card-action grey lighten-4 grey-text"></div>
      </div>
    </div>
  ) : isEmpty(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">No content</span>
        </div>
        <div className="card-action grey lighten-4 grey-text"></div>
      </div>
    </div>
  ) : (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{note.title}</span>
          <p>{note.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>{moment(note.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  );

  return noteMarkup;
};

export default NoteDetail;
