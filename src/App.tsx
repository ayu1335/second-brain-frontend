import Dashboard from './pages/DashBoard'
import Signin from './pages/Signin'
import Signup from './pages/Signup';
import { BrowserRouter,Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App