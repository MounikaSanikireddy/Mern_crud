
import './App.css';
import {Routes,Route} from "react-router-dom"
import User from './component/User';
import Create from './component/Create';
import Update from './component/Update';

function App() {
  return (
    <Routes>
      <Route path="/" element={<User/>}></Route>
      <Route path="create" element={<Create/>}></Route>
      <Route path="update/:id" element={<Update/>}></Route>
    </Routes>
    
   
  );
}

export default App;
