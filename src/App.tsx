import ListItem from "./components/ListItem";
import { AppContainer } from "./styles";
import "./App.css";

const styles: React.CSSProperties = {
  color: "red",
  backgroundColor: "blue",
};

const cars = [
  {
    id: 1,
    carName: "Ferrari",
  },
  {
    id: 2,
    carName: "Mercedes",
  },
  {
    id: 3,
    carName: "McLaren",
  },
];

function App() {
  return (
    <AppContainer>
      <header>
        <h1>VERCEL</h1>
      </header>
      <main>
        <ul>
          {cars.map((car) => (
            <ListItem key={car.id} car={car.carName} />
          ))}
        </ul>
      </main>
    </AppContainer>
  );
}

export default App;
