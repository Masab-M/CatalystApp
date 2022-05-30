import { Routes, Route } from "react-router-dom"
import Login from './view/userOne/login'
import CreateProjectComponent from "./components/userOne/create/CreateProject";
import ReviewProject from "./components/userOne/ReviewProject";
import CreateProject from "./view/userOne/Dashboard";
import Home from "./view/userOne/Home";
import GenerateFF from "./components/userOne/GenerateFF";
import ViewFF from "./components/userOne/ViewFF";
import Links from "./components/Links";
import Assumption from "./components/userOne/create/Assumption";
import Upload from "./components/userOne/create/upload";
import Import from "./components/userOne/create/Import";
function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<Links />} />
        <Route path="userOne" element={<Home />} />
        <Route path="userOne/login" element={<Login />} />
        <Route path="userOne/dashBoard" element={<CreateProject />}>
          <Route path="Project/create" element={<CreateProjectComponent />} />
          <Route path="Project/assumption" element={ <Assumption /> } >
            <Route path="" element={<Upload />}/>
            <Route path="upload" element={ <Upload/> }/>
            <Route path='import' element={<Import/>}/>
          </Route>
          <Route path="Project/review" element={<ReviewProject/>} />
          <Route path="ff/generate" element={ <GenerateFF/> } />
          <Route path="ff/view" element={ <ViewFF/> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
