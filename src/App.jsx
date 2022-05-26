import { Routes, Route } from "react-router-dom"
import Login from './view/userOne/login'
import CreateProjectComponent from "./components/userOne/CreateProject";
import CreateProject from "./view/userOne/Dashboard";
import Home from "./view/userOne/Home";
function App() {

  return (
    <>
      <Routes>
        <Route path="userOne" element={<Home />} />
        <Route path="userOne/login" element={<Login />} />
        <Route path="userOne/dashBoard" element={<CreateProject />}>
          <Route path="" element={<CreateProjectComponent />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
