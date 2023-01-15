import React from 'react';
import { Route, Routes } from 'react-router';
import Promo from "../../pages/Pomo/Promo";

const App: React.FC = () => (
        <div>
            <Routes>
                <Route path="/" element={<Promo/>} />
            </Routes>
        </div>
    );

export default App;