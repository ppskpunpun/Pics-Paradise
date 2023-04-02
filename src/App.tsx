import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":search" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}