import { Routes, Route } from "react-router-dom"
import Home from "../src/pages/Home"

import Project from "./pages/Project"
import Music from "./pages/Music"
import Photography from "./pages/Photography"
// import Navbar from "./components/Navbar"

export default function App() {
  return (
   <div>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/music" element={<Music />} />
      <Route path="/photography" element={<Photography />}/>
    </Routes>
   </div>
  )
}