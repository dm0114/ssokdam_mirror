import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Loading from './Pages/Loading.jsx'
import Login from './Pages/Auth/Login.jsx'
import FindId from './Pages/Auth/FindId';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loading/>}>
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/login/findId' element={<FindId/>} />
      </Routes>
    </Router>
  );
}

export default App;
