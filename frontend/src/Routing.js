import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Faq from "./components/FAQ/Faq";
import About from "./components/About/About";
import Dashboard from "./components/UserController/Dashboard";
import AddBook from "./components/UserController/AddBook";
import SearchBook from "./components/UserController/SearchBook";
import UpdateBook from "./components/UserController/UpdateBook";
import DeleteBook from "./components/UserController/DeleteBook";
import LogIn from "./components/common/LogIn";
import SignUp from "./components/common/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

const Routing=()=>{
    return(<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Faq" element={<Faq/>}/>

            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<LogIn/>}/>

            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path="/addbook" element={<ProtectedRoute><AddBook/></ProtectedRoute>} />
            <Route path="/searchbook" element={<ProtectedRoute><SearchBook/></ProtectedRoute>} />
            <Route path="/updatebook" element={<ProtectedRoute><UpdateBook/></ProtectedRoute>} />
            <Route path="/deletebook" element={<ProtectedRoute><DeleteBook /></ProtectedRoute>} />
        </Routes>
    </>)
}
export default Routing;