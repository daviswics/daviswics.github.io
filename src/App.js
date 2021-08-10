import "./App.css";

import MyNavbar from "./components/common/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Events from "./components/events/Events";
import Newsletter from "./components/newsletter/Newsletter";
import Contact from "./components/contact/Contact";
import Sponsers from "./components/sponsers/Sponsers";

function App() {
  return (
    <div className="App d-flex flex-column">
      <MyNavbar />
      <Home />
      <About />
      <Events />
      <Newsletter />
      <Contact />
      <Sponsers />
    </div>
  );
}

export default App;
