import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import NavBar from './components/NavBar';
import {Routes, Route } from 'react-router-dom'
import ViewEmp from './components/ViewEmp';
import Add from './components/Add';
function App() {
  return (
    <div className="App">
      {/* <h1> Welcome</h1> */}
      {/* <View/> */}
      {/* <Home/>  */}
      {/* <AddEmployee/> */}
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/add' element = {<Add data={{sname:'',age:'',pos:'',sal:''}} method = 'post'/>} />
        <Route path='/view' element = {<ViewEmp/>} />
      </Routes>
    </div>
  );
}

export default App;
