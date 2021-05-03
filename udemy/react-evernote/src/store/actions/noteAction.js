export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => console.log("Add successfully"))
      .catch((err) => console.log("Add failed", err));
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .delete()
      .then(() => console.log("Delete successfully"))
      .catch((err) => console.log("Delete failed", err));
  };
};

export const toggleFav = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const favoriteStatus = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({ favorite: favoriteStatus })
      .then(() => console.log("Toggle Favorite successfully"))
      .catch((err) => console.log("Toggle Favorite failed", err));
  };
};

export const updateNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({
        title: note.title,
        content: note.content,
      })
      .then(() => console.log("Update Note successfully"))
      .catch((err) => console.log("Update Note failed", err));
  };
};
