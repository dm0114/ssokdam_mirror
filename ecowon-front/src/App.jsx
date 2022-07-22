import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import GlobalStyle from './styles/GlobalStyle';
import Loading from './Pages/Loading.jsx'
import Login from './Pages/Auth/Login.jsx'
import FindId from './Pages/Auth/FindId';
import FindPw from './Pages/Auth/FindPw';
import SignUp from './Pages/Auth/SignUp.jsx'

import Home from './Pages/Main/Home'
import Navigation from './Pages/Nav/Navigation'
import ServiceInfo from './Pages/Main/ServiceInfo'
import ServiceCenter from './Pages/Main/ServiceCenter'
import FrequentlyQuestion from './Pages/Main/FrequentlyQuestion'
import MyAsk from './Pages/Main/MyAsk'
import MyPage from './Pages/Main/Mypage'
import ChangePw from './Pages/Auth/ChangePw';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/navigation' element={<Navigation/>} />
          <Route path='/myPage' element={<MyPage/>} />
          <Route path='/serviceInfo' element={<ServiceInfo/>} />
          <Route path='/serviceCenter' element={<ServiceCenter/>} />
          <Route path='/frequentlyQuestion' element={<FrequentlyQuestion />} />
          <Route path='/myAsk' element={<MyAsk />} />
          
          
          <Route path='/login' element={<Login/>} />
          <Route path='/login/findId' element={<FindId/>} />
          <Route path='/login/findPw' element={<FindPw/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login/changePw' element={<ChangePw/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
