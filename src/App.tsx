import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from './components/Footer'
import Home from './routes/Home'
import Fund from './routes/Fundaments'
import Reishiki from './routes/Reishiki'
import Beneficios from './routes/Beneficios'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Fund' element={<Fund />} />
          <Route path='/Reishiki' element={<Reishiki />}/>
          <Route path='/Beneficios' element={<Beneficios />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
