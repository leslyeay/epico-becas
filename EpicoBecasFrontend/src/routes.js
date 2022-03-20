import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';

export default function LinkRoutes () {
    return(
    <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
      </Routes>
    )
}