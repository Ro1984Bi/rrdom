import { BrowserRouter, Route , Routes, Navigate} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import NotFound from "./pages/NotFound"
import UsersPage from "./pages/UsersPage"
import Navbar from "./components/Navbar"
import UserPage from "./pages/UserPage"
import Dashboard from "./pages/Dashboard"
export default function App() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/user/:id' element={<UserPage/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path='/usuarios' element={<Navigate to='/users'/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    )
}