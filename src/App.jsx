import { Routes, Route } from "react-router-dom"
import Login from './view/userOne/login'
import CreateProjectComponent from "./components/userOne/CreateProject";
import ReviewProject from "./components/userOne/ReviewProject";
import CreateProject from "./view/userOne/Dashboard";
import Home from "./view/userOne/Home";
import GenerateFF from "./components/userOne/GenerateFF";
import ViewFF from "./components/userOne/ViewFF";
function App() {

  return (
    <>
      <Routes>
        <Route path="userOne" element={<Home />} />
        <Route path="userOne/login" element={<Login />} />
        <Route path="userOne/dashBoard" element={<CreateProject />}>
          <Route path="Project/create" element={<CreateProjectComponent />} />
          <Route path="Project/review" element={<ReviewProject/>} />
          <Route path="ff/generate" element={ <GenerateFF/> } />
          <Route path="ff/view" element={ <ViewFF/> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
