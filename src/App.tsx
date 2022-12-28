import "./App.css";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import StartContentPage from "./components/StartContentPage/StartContentPage";
import TracksPage from "./components/TracksPage/TracksPage";
import MixPage from "./components/Mix/MixPage";
import ExtApi from "./components/ExtApi/ExtApi";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/"
                           element={<StartContentPage/>}/>
                    <Route path="/content/"
                           element={<StartContentPage/>}/>
                    <Route path="/tracks/*"
                           element={<TracksPage/>}/>
                    <Route path="/mix/*"
                           element={<MixPage/>}/>
                    <Route path="/ext-api/*"
                           element={<ExtApi/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;