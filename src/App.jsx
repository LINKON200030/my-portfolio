import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home-Page.jsx";
import MearnEatsProjectPage from "@/pages/MearnEatsProject-Page.jsx";

const App = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={ <HomePage />} />
               <Route path="/project/mearneats" element={ <MearnEatsProjectPage />} />
           </Routes>
       </BrowserRouter>

    );
};

export default App;
