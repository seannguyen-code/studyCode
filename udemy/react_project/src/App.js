import { Component } from "react";
import "./App.css";
import Card from "./Card";
import { ThemeProvider } from "styled-components";
import Button from "./element/Button";

const theme = {
  primary: "#4caf50",
  mango: "yellow",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
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
      ],
      showCard: true,
    };
  }

  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards];
    cards_copy.splice(cardIndex, 1);
    this.setState({ cards: cards_copy });
  };

  toggleShowCard = () => {
    this.setState({ showCard: !this.state.showCard });
  };

  changeNameHandler = (e, id) => {
    const cardIndex = this.state.cards.findIndex((card) => card.id === id);
    const copy_cards = [...this.state.cards];
    copy_cards[cardIndex].name = e.target.value;
    this.setState({ cards: copy_cards });
  };

  render() {
    const cardsMarkup =
      this.state.showCard &&
      this.state.cards.map((card, index) => (
        <Card
          key={card.id}
          name={card.name}
          title={card.title}
          avatar={card.avatar}
          onDelete={() => this.deleteCardHandler(index)}
          onChangeName={(e) => this.changeNameHandler(e, card.id)}
        />
      ));

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button
            color="primary"
            onClick={this.toggleShowCard}
            length={this.state.cards.length}
          >
            Toggle Show/Hide
          </Button>
          {cardsMarkup}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
