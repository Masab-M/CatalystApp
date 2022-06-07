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
import ComponentLevel from "./components/userOne/level/Component/ComponentLevel";
import ItemLevel from "./components/userOne/level/Item/ItemLevel";
import Expenditure from "./components/userOne/level/Project/Expenditure";
import Depreciation from "./components/userOne/level/Project/Depreciation";
import Revenue from "./components/userOne/level/Project/Revenue";
import ProfitLoss from "./components/userOne/level/Project/ProfitLoss";
import CashFlow from "./components/userOne/level/Project/CashFlow";
import ExpenditureC from "./components/userOne/level/Component/ExpenditureC";
import DepriciationC from "./components/userOne/level/Component/DepriciationC";
import RevenueC from "./components/userOne/level/Component/RevenueC";
import ProfitLossC from "./components/userOne/level/Component/ProfitLossC";
import CashFlowC from "./components/userOne/level/Component/CashFlowC";
import ThreeGData from "./components/userOne/level/Item/ThreeGData";
import ThreeGVoice from "./components/userOne/level/Item/ThreeGVoice";
import ThreeGVideo from "./components/userOne/level/Item/ThreeGVideo";
import FourGData from "./components/userOne/level/Item/FourGData";
import FiveGData from "./components/userOne/level/Item/FiveGData";
import DashBoardTwo from "./view/UserTwo/DashBoardTwo";
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
          <Route path="Project/component" element={ <Component/> } />
          <Route path="Project/review" element={<ReviewProject/>} />
          <Route path="ff/generate" element={ <GenerateFF/> } />
          <Route path="ff/view" element={ <ViewFF/> } />
          <Route path="ff/view/project" element={ <ProjectLevel/> } >
            <Route path="" element={ <Expenditure/> } />
            <Route path="expenditure" element={ <Expenditure/> } />
            <Route path="depreciation" element={ <Depreciation/> } />
            <Route path="revenue" element={ <Revenue/> } />
            <Route path="profitandLoss" element={ <ProfitLoss/> } />
            <Route path="cashFlow" element={ <CashFlow/> } />
          </Route>
          <Route path="ff/view/component" element={ <ComponentLevel/> } >
            <Route path="" element={ <ExpenditureC/> } />
            <Route path="expenditure" element={ <ExpenditureC/> } />
            <Route path="depreciation" element={ <DepriciationC/> } />
            <Route path="revenue" element={ <RevenueC/> } />
            <Route path="profitandLoss" element={ <ProfitLossC/> } />
            <Route path="cashFlow" element={ <CashFlowC/> } />
          </Route>
          <Route path="ff/view/item" element={ <ItemLevel/> } >
            <Route path="" element={ <ThreeGData/> } />
            <Route path="threedata" element={ <ThreeGData/> } />
            <Route path="threevoice" element={ <ThreeGVoice/> } />
            <Route path="fourdata" element={ <ThreeGVideo/> } />
            <Route path="fourvoice" element={ <FourGData/> } />
            <Route path="fivedata" element={ <FiveGData/> } />
          </Route>
        </Route>
        <Route path="usertwo/login" element={ <Login/>} />
        <Route path="usertwo/dashboard" element={ <DashBoardTwo/> }>

        </Route>
      </Routes>
    </>
  )
}

export default App
