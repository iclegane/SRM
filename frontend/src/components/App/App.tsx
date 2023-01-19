import React from 'react';
import { Route, Routes } from 'react-router';
import Promo from "../../pages/Pomo/Promo";

const App: React.FC = () => (
        <Routes>
            <Route path="/" element={<Promo/>} />
        </Routes>
    );

export default App;