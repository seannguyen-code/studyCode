import "./App.css";
import Card from "./Card";
import faker from "faker";

function App() {
  const btnsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  );

  return (
    <div className="App">
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={`${faker.name.jobTitle()}`}
        avatar={`${faker.image.avatar()}`}
      >
        {btnsMarkup}
      </Card>
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={`${faker.name.jobTitle()}`}
        avatar={`${faker.image.avatar()}`}
      >
        {btnsMarkup}
      </Card>
      <Card
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={`${faker.name.jobTitle()}`}
        avatar={`${faker.image.avatar()}`}
      >
        {btnsMarkup}
      </Card>
    </div>
  );
}

export default App;
