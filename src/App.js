import "./App.css";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import StartContentPage from "./components/StartContentPage/StartContentPage";
import TracksPageContainer from "./components/TracksPage/TracksPageContainer";
import Mix from "./components/Mix/Mix";

function App(props) {
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
                           element={<TracksPageContainer />} />
                    <Route path="/mix/*"
                           element={<Mix />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;