import Header from "./components/Header";
import Body from "./components/Body";
import AddTutorial from "./components/AddTutorial";
import Tutorials from "./components/Tutorials";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App mynav position-relative">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/addTut" element={<AddTutorial />} />
          <Route exact path="/Tut" element={<Tutorials />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;
