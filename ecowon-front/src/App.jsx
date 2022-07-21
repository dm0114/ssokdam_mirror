import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import GlobalStyle from './components/GlobalStyle';
import Loading from './Pages/Loading.jsx'
import Login from './Pages/Auth/Login.jsx'
import FindId from './Pages/Auth/FindId';
import SignUp from './Pages/Auth/SignUp.jsx'
import Home from './Pages/Main/Home'
import FindPw from './Pages/Auth/FindPw';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Loading/>}>
          </Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/login/findId' element={<FindId/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login/findPw' element={<FindPw/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
