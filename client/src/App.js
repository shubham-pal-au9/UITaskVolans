import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Unipartners from "./Components/Unipartners";
import Academia from "./Components/Academia";

function App() {
  return (
    <div>
      <Header />
      <Unipartners />
      <Academia />
      {/* <LatestBlog /> */}
    </div>
  );
}

export default App;
