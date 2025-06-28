import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Footer from './components/Footer'
import Home from './routes/Home'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Welcome />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
