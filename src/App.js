import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
