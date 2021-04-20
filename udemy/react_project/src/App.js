import { useState } from "react";
import "./App.css";
import Card from "./Card";
import faker from "faker";

function App() {
  const [name, setName] = useState("Gojo Satoru");
  const [showCard, setshowCard] = useState(true);

  const changeNameHandler = () => {
    setName("Sukuna");
  };

  const changeInputHandler = (e) => {
    setName(e.target.value);
  };

  const toggleShowCard = () => {
    setshowCard(!showCard);
  };

  const btnsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  );

  const cardsMarkup = showCard && (
    <Card
      name={name}
      title="Forward Communications Director"
      avatar="https://picsum.photos/400"
      onChangeName={changeNameHandler}
      onChangeInput={changeInputHandler}
    >
      {btnsMarkup}
    </Card>
  );

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>
        Toggle Show/Hide
      </button>
      {cardsMarkup}
    </div>
  );
}

export default App;
