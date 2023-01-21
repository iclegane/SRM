import React from 'react';
import { Route, Routes } from 'react-router';
import PromoPage from "../../pages/Pomo/Promo";

const App: React.FC = () => (
        <Routes>
            <Route path="/" element={<PromoPage/>} />
        </Routes>
    );

export default App;