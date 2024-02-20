import { Route,Routes } from 'react-router-dom'
import './App.css'
import LandingPages from './pages/LandingPages'
import HomePages from './pages/HomePages'
import Watch from './pages/Watch'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<LandingPages/>}/>
      <Route path='/home' element={<HomePages/>}/>
      <Route path='/watch' element={<Watch/>}/>
     </Routes>
    <Footer/>
    </>
  )
}

export default App
