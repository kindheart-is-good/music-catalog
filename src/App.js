import "./App.css";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import StartContentPage from "./components/StartContentPage/StartContentPage";
import ContentContainer from "./components/Content/ContentContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/"
                           element={<StartContentPage />} />
                    <Route path="/content/*"
                           element={<ContentContainer />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;