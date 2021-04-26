import { useReducer, createContext } from "react";

import ComponentA from "./components/ComponentA";
import "./App.css";

const initState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { ...state, counter: state.counter + 1 };
    case "-":
      return { ...state, counter: state.counter - 1 };
    case "reset":
      return initState;
    default:
      return state;
  }
};

export const CounterContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <CounterContext.Provider value={{ counter: state.counter, dispatch }}>
        <ComponentA />
      </CounterContext.Provider>
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
