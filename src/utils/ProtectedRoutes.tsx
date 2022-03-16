import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoutes() {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />
}

export function UnprotectedRoutes() {
  return !localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/characters" />
  )
}
