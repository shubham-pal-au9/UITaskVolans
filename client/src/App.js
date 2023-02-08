import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Unipartners from "./Components/Unipartners";
import Academia from "./Components/Academia";
import LatestBlog from "./Components/LatestBlog";
import UniReview from "./Components/UniReview";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Unipartners />
      <Academia />
      <LatestBlog />
      <UniReview />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
