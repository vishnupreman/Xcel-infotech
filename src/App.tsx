
import './App.css'
import { Routes, Route } from 'react-router-dom';
import UnderConstructionPage from './pages/Mypage'
import Research from './pages/Research';
function App() {
  return (
    <Routes>
      <Route path='/' element={<UnderConstructionPage />}/>
      <Route path='/research' element={<Research />} />
    </Routes>
  )
}

export default App
