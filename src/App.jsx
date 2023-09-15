import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import SignInPage from "./components/signInPage/signInPage";
import SignUpPage from "./components/signUpPage/signUpPage";
import HomePage from "./components/homePage/homePage";
import { AuthProvider } from "./context/auth.context";
import AuthGuard from "./guards/Auth.Guard";
import GuestGuard from "./guards/guest.Guard";

function App() {
  return (
    <AuthProvider>
    <Routes>
        <Route exact path="/" element={<GuestGuard><SignInPage /></GuestGuard>}/>
        <Route path="/SignUp" element={<GuestGuard><SignUpPage /></GuestGuard>}/>
        <Route path = "/home" element={<AuthGuard><HomePage/></AuthGuard>}/>
    </Routes>
    </AuthProvider>
  );
}

export default App;
