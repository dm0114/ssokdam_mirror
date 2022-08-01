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
import EcoMap from "./Pages/Main/EcoMap";
import Home from './Pages/Main/Home'
import Qr from './Pages/Main/Qr'
import ServiceInfo from './Pages/Main/ServiceInfo'
import ServiceCenter from './Pages/Main/ServiceCenter'
import FrequentlyQuestion from './Pages/Main/FrequentlyQuestion'
import MyAsk from './Pages/Main/MyAsk'
import MyPage from './Pages/Main/Mypage'
import ChangePw from './Pages/Auth/ChangePw';
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
          <Route path='/serviceInfo' element={<ServiceInfo/>} />
          <Route path='/serviceCenter' element={<ServiceCenter/>} />
          <Route path='/frequentlyQuestion' element={<FrequentlyQuestion />} />
          <Route path='/myAsk' element={<MyAsk />} />
          <Route path='/map' element={ <EcoMap/>} />
          <Route path='/qr' element={<Qr/>} />
          
          
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
