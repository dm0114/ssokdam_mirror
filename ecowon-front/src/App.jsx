import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Loading from './Pages/Loading.jsx'
import Login from './Pages/Auth/Login.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loading/>}>
        </Route>
        <Route path='/login' element={<Login/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
