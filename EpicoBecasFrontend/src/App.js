import * as React from "react";
import Container from "@mui/material/Container";
import { BrowserRouter as Router } from "react-router-dom";
import LinkRoutes from "./routes";
import Header from "./layout/Header";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Router>
        <Header></Header>
        <LinkRoutes></LinkRoutes>
      </Router>
    </Container>
  );
}
