import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1>Diamond World</h1>
      <div className="cards-collection">
        <Card name="Round" price="$966" image="src/assets/1-round.jpg" />
        <Card
          name="Princes"
          price="$799"
          image="src/assets/2-princess.jpg"
          sale
        />
        <Card
          name="Collection"
          price="$1,699"
          image="src/assets/3-collection.jpg"
          sale
        />
      </div>
    </>
  );
}

export default App;
