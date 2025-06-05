
import './App.css'
import { Routes, Route } from 'react-router-dom';
import UnderConstructionPage from './pages/Mypage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<UnderConstructionPage />}/>
    </Routes>
  )
}

export default App
