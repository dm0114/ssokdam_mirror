import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Loading from './Pages/Loading.jsx'
import Login from './Pages/Auth/Login.jsx'
import FindId from './Pages/Auth/FindId';
<<<<<<< HEAD
import SignUp from './Pages/Auth/SignUp.jsx'
import Home from './Pages/Main/Home'
=======
import FindPw from './Pages/Auth/FindPw';
>>>>>>> e3dbce3b10165a28417b10cbb43b672d2f21a33e

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loading/>}>
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/login/findId' element={<FindId/>} />
<<<<<<< HEAD
        <Route path='/signup' element={<SignUp/>} />
=======
        <Route path='/login/findPw' element={<FindPw/>} />
>>>>>>> e3dbce3b10165a28417b10cbb43b672d2f21a33e
      </Routes>
    </Router>
  );
}

export default App;
