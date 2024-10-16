import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:slug' element={<Single/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
