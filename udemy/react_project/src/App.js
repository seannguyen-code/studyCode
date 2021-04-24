import { useState } from "react";
import "./App.css";
import Card from "./Card";
import faker from "faker";

function App() {
  const [cards, setCards] = useState([
    {
      id: Math.floor(Math.random() * 100) + 1,
      name: "Sukuna",
      avatar: "https://picsum.photos/400",
      title: "Curse",
    },
    {
      id: Math.floor(Math.random() * 100) + 1,
      name: "Gojo Satoru",
      avatar: "https://picsum.photos/400",
      title: "Soccerer",
    },
    {
      id: Math.floor(Math.random() * 100) + 1,
      name: "Toji Zennin",
      avatar: "https://picsum.photos/400",
      title: "InHuman",
    },
  ]);
  const [showCard, setshowCard] = useState(true);

  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards];
    cards_copy.splice(cardIndex, 1);
    setCards(cards_copy);
  };

  const toggleShowCard = () => {
    setshowCard(!showCard);
  };

  const changeNameHandler = (e, id) => {
    const cardIndex = cards.findIndex((card) => card.id === id);
    const copy_cards = [...cards];
    copy_cards[cardIndex].name = e.target.value;
    setCards(copy_cards);
  };

  const cardsMarkup =
    showCard &&
    cards.map((card, index) => (
      <Card
        key={card.id}
        name={card.name}
        title={card.title}
        avatar={card.avatar}
        onDelete={() => deleteCardHandler(index)}
        onChangeName={(e) => changeNameHandler(e, card.id)}
      />
    ));

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
