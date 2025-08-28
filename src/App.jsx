
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Loginpage from './Loginpage'
import List from './List'
import Detail from './Detail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
    </>
  )
}

export default App
