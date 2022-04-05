import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MakeDashboard} from "@/main/factories/pages/Dashboard/MakeDashboard";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MakeDashboard/>} />
            </Routes>
        </BrowserRouter>
    );
};
