import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Header from "./components/Header"
import Footer from './components/Footer'
import Home from './routes/Home'
import { Fundaments } from './routes/Fundaments'
import { Historia } from './routes/Historia'
import Beneficios from './routes/Beneficios'
import { Tecnicas } from './routes/Tecnicas'
import { Curiosidades } from './routes/Curiosidades'

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/fundamentos' element={<Fundaments />} />
          <Route path='/beneficios' element={<Beneficios />} />
          <Route path='/tecnicas' element={<Tecnicas />} />
          <Route path='/curiosidades' element={<Curiosidades />} />
          
          {/* Retrocompatibilidade com as rotas antigas */}
          <Route path='/Fund' element={<Fundaments />} />
          <Route path='/Reishiki' element={<Historia />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
