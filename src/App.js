import Accordion from "./Accordion";
import "./App.css";
import { questions } from "./questions";

function App() {
  return (
    <div className="App">
      <h1>FAQ</h1>
      <div className="accordion">
        {questions.map(({ title, answer }) => (
          <Accordion title={title} answer={answer} />
        ))}
      </div>
    </div>
  );
}

export default App;
