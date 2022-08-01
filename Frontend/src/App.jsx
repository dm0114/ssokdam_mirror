import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import GlobalStyle from './styles/GlobalStyle';
// import Loading from './Pages/Loading.jsx'
import Login from './Pages/Auth/Login'
import FindId from './Pages/Auth/FindId';
import FindPw from './Pages/Auth/FindPw';
import SignUp from './Pages/Auth/SignUp.jsx'
import ChangePw from './Pages/Auth/ChangePw';

import EcoMap from "./Pages/Main/EcoMap";
import Home from './Pages/Main/Home'
import Qr from './Pages/Main/Qr'
import MyPage from './Pages/Main/Mypage'

import Exchange from './Pages/Sub/Exchange'
import ServiceInfo from './Pages/Sub/ServiceInfo'
import ServiceCenter from './Pages/Sub/ServiceCenter'
import MyAsk from './Pages/Sub/MyAsk'
import Complaint from './Pages/Sub/Complaint'
import BrokenDeviceReport from './Pages/Sub/BrokenDeviceReport'

import Alarm from './Pages/Nav/Alarm'

import AdminLogin from './Pages/Admin/AdminLogin'
import AdminHome from './Pages/Admin/AdminHome'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/myPage' element={<MyPage/>} />
          <Route path='/alarm' element={<Alarm/>} />
          <Route path='/map' element={ <EcoMap/>} />
          <Route path='/qr' element={<Qr/>} />
          
          <Route path='/serviceInfo' element={<ServiceInfo/>} />
          <Route path='/serviceCenter' element={<ServiceCenter/>} />
          <Route path='/frequentlyQuestion' element={<FrequentlyQuestion />} />
          <Route path='/myAsk' element={<MyAsk />} />
          <Route path='/exchange' element={<Exchange/>} />
          <Route path='/complaint' element={<Complaint/>} />
          <Route path='/brokenDeviceReport' element={<BrokenDeviceReport/>} />
          
          <Route path='/login' element={<Login/>} />
          <Route path='/login/findId' element={<FindId/>} />
          <Route path='/login/findPw' element={<FindPw/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login/changePw' element={<ChangePw/>} />

          <Route path='/adminLogin' element={<AdminLogin/>} />
          <Route path='/admin' element={<AdminHome/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
