import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact  from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Plans from './Pages/Plans'
import Trainers from './Pages/Trainers'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NotFound from './Components/NotFound'


const  App = ()=> {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Gallery' element={<Gallery/>}></Route>
        <Route path='Plans' element={<Plans/>}></Route>
        <Route path='Trainers' element={<Trainers/>}></Route>
        <Route path='NotFound' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
  )
}

export default App;
