import { Navigate, Route, Routes, Link } from "react-router-dom"
import { AboutPage, HomePage, LoginPage } from "./index.js"
import { Navbar } from "./Navbar.jsx"


export const MainApp = () => {
  return (
    <>
        <Navbar/>
        <hr />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="about" element={ <AboutPage /> } />

            {/* <Route path="/*" element={ <LoginPage /> } /> */}
            <Route path="/*" element={ <Navigate to="about"/> } />
        </Routes>
    </>
  )
}
