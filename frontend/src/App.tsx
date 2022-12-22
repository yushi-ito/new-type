/* eslint-disable arrow-body-style */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

// eslint-disable-next-line react/function-component-definition
const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
