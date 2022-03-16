import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Characters from "./pages/characters"

import Login from "./pages/login"
import Register from "./pages/register"
import ProtectedRoutes, { UnprotectedRoutes } from "./utils/ProtectedRoutes"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/characters" element={<Characters />} />
        </Route>
        <Route element={<UnprotectedRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
