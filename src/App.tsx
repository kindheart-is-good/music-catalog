import "./App.css";
import {Route, Routes} from "react-router-dom";
import StartContentPage from "./pages/StartContentPage/StartContentPage";
import TracksPage from "./pages/TracksPage/TracksPage";
import MixPage from "./pages/Mix/MixPage";
import ExtApi from "./pages/ExtApi/ExtApi";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/"
                           element={<StartContentPage />} />
                    <Route path="/content/"
                           element={<StartContentPage />} />
                    <Route path="/tracks/*"
                           element={<TracksPage />} />
                    <Route path="/mix/*"
                           element={<MixPage />} />
                    <Route path="/ext-api/*"
                           element={<ExtApi /> } />
                    <Route path="/login"
                           element={<LoginPage />} />
                    <Route path="/register"
                           element={<RegisterPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;