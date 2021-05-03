import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Favorites from "./components/notes/Favorites";
import NoteDetail from "./components/notes/NoteDetail";
import EditForm from "./components/notes/EditForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NoteDetail} />
        <Route path="/editform/:id" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
