import React from 'react';
import { Route, Routes } from 'react-router';
import Components from "../../pages/Components/Components";

const App: React.FC = () => (
        <Routes>
            <Route path="/" element={<Components/>} />
        </Routes>
    );

export default App;