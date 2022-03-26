import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/postulant/Contact';
import Home from './components/postulant/Home';
import ScholarshipDetail from './components/postulant/ScholarshipDetail';

export default function LinkRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacto" element={<Contact />}></Route>
            <Route path="/detalle" element={<ScholarshipDetail />}></Route>
        </Routes>
    )
}