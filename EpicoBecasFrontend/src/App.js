import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LinkRoutes from "./LinkRoutes";

export default function App() {
    return (
        <Router>
            <LinkRoutes></LinkRoutes>
        </Router>
    );
}
