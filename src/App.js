import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Createdata from './Createdata';
import Datas from './Datas';
import Editdata from './Editdata';
import Viewdata from './Viewdata';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Datas></Datas>}></Route>
      <Route path='/createdata' element={<Createdata></Createdata>}></Route>
      <Route path='/viewdata/:id' element={<Viewdata></Viewdata>}></Route>
      <Route path='/editdata/:id' element={<Editdata></Editdata>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
