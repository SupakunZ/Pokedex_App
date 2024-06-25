import { useState } from 'react'
import {BrowserRouter,Route, Routes,} from "react-router-dom";
import  {HomePage}  from './pages/home'
import  {DetailPage}  from './pages/detail'
import { MainPage } from './pages/main';
import NavBar from './pages/main/NavBar';


function App() {

  return(
    <div className="bg-[url('/images/bg-web.jpg')] bg-cover bg-center bg-fixed"> 
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element ={<MainPage/>}/>
          <Route path="/pokedex" element ={<HomePage/>}/>
          <Route path="/pokedex/detail/:name" element ={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App
