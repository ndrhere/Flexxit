import './App.css';
import Home from './Components/Home';
import Signup from './Components/Signup';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Login from './Components/Login';
import VideoPage from './Components/VideoPage';
import AddPayment from './Components/AddPayment';
import ChoosePlan from './Components/ChoosePlan';
import PlanOptions from './Components/PlanOptions';
import About from './Components/About';

function App() {
  return(
<>
<Router>



<Routes>
<Route exact path = '/home' element = {<Home/>}></Route>
<Route exact path = '/' element={<Signup/>}></Route>
<Route exact path = '/login' element={<Login/>}></Route>
<Route exact path = '/videopage' element= {<VideoPage/>}></Route>
<Route exact path = '/addpayment' element= {<AddPayment/>}></Route>
<Route exact path = "/chooseplan" element = {<ChoosePlan/>}></Route>
<Route exact path = "/planoptions" element = {<PlanOptions/>}></Route>
<Route exact path = "/about" element = {<About/>}></Route>




</Routes>










</Router>

</>
  )
}

export default App;
