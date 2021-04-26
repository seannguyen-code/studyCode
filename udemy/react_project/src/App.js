import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";
import { ThemeProvider } from "styled-components";

import "./App.css";
import Card from "./Card";

import ComponentA from "./components/ComponentA";

export const NameContext = createContext();
export const ColorContext = createContext();

const App = () => {
  return (
    <div className="App">
      <NameContext.Provider value={"Testing"}>
        <ColorContext.Provider value={"red"}>
          <ComponentA />
        </ColorContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

// const theme = {
//   primary: "#4caf50",
//   mango: "yellow",
// };

// function App() {
//   const [card, setCard] = useState([]);
//   const [id, setId] = useState(1);
//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((res) => {
//         console.log(res.data);
//         setCard(res.data);
//       });
//   }, [id]);

//   const changeNameHandler = (e) => {
//     const copy_cards = { ...card };
//     copy_cards.name = e.target.value;
//     setCard(copy_cards);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <div className="App">
//         <input
//           type="number"
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//         />
//         <Card
//           key={card.id}
//           name={card.name}
//           phone={card.phone}
//           avatar={card.avatar}
//           onChangeName={changeNameHandler}
//         />
//       </div>
//     </ThemeProvider>
//   );
// }

export default App;
