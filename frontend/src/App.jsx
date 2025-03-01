import "./App.css";
import "./styles/base.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home></Home>
    </>
  );
}

export default App;
