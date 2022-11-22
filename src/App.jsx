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
import Component from "./components/userOne/create/Component";
import ProjectLevel from "./components/userOne/level/Project/ProjectLevel";
import Expenditure from "./components/userOne/level/Project/Expenditure";
import Depreciation from "./components/userOne/level/Project/Depreciation";
import Revenue from "./components/userOne/level/Project/Revenue";
import ProfitLoss from "./components/userOne/level/Project/ProfitLoss";
import CashFlow from "./components/userOne/level/Project/CashFlow";
import DashBoardTwo from "./view/UserTwo/DashBoardTwo";
import ViewProject from "./components/usertwo/Project/ViewProject"
function App() {

  return (
    <>
      <Routes>
        <Route path="" element={<Links />} />
        <Route path="userOne" element={<Home />} />
        <Route path="userOne/login" element={<Login />} />
        <Route path="userOne/dashBoard" element={<CreateProject />}>
          <Route path="Project/create" element={<CreateProjectComponent />} />
          <Route path="Project/assumption" element={<Assumption />} >
          </Route>
          <Route path="Project/component" element={<Component />} />
          <Route path="Project/review" element={<ReviewProject />} />
          <Route path="ff/generate" element={<GenerateFF />} />
          <Route path="ff/view" element={<ViewFF />} />
          <Route path="ff/view/project/:id" element={<ProjectLevel />} >
            <Route path="" element={<Expenditure />} />
            <Route path="expenditure" element={<Expenditure />} />
            <Route path="depreciation" element={<Depreciation />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="profitandLoss" element={<ProfitLoss />} />
            <Route path="cashFlow" element={<CashFlow />} />
          </Route>
        </Route>
        <Route path="usertwo/login" element={<Login />} />
        <Route path="usertwo/dashboard" element={<DashBoardTwo />}>
          <Route path="Project/view" element={<ViewProject />} />
          <Route path="ff/view" element={<ViewFF />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
