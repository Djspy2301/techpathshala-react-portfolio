import "./App.css";
import Discover from "./button/Discover";
import Content from "./content/Content";
import Img from "./photo/Img";

function App() {
  return (
    <section className="sec1">
      <Img />
      <div className="content">
        <Content />
        <Discover />
      </div>
    </section>
  );
}

export default App;
