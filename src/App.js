import Header from "./components/Header";
import AddTutorial from "./components/AddTutorial";
import Tutorials from "./components/Tutorials";
import Login from "./components/Login";
import MyTut from "./components/MyTut";
import { Routes, Route, BrowserRouter } from "react-router-dom";

let baseApi = "https://powerful-lowlands-76999.herokuapp.com/"

function App() {
  return (
    <div className="App mynav position-relative overflow-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/addTut" element={<AddTutorial />} />
          <Route exact path="/MyTut/:id" element={<MyTut />} />
          <Route exact path="/Tut" element={<Tutorials />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;
export { baseApi }