import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </Router>
    );
};

export default App;
