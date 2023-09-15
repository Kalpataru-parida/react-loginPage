import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import SignInPage from "./components/signInPage/signInPage";
import SignUpPage from "./components/signUpPage/signUpPage";
import HomePage from "./components/homePage/homePage";
function App() {
  return (
    <Routes>
        <Route exact path="/" element={<SignInPage />}/>
        <Route path="/SignUp" element={<SignUpPage />}/>
        <Route path = "/home" element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
