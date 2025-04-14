import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Blog from './pages/Blog'
import Other from './pages/Other'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
function App() {
  

  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/other" element={<Other/>} />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
