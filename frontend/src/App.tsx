import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ImageAnalysis from './pages/ImageAnalysis'

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/image-analysis' element={<ImageAnalysis />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App