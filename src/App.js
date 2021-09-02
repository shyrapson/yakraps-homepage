import React from 'react'
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
function App() {
  return (

    <ChakraProvider>
      <Router>
        <Layout />
      </Router>
    </ChakraProvider>

  );
}

export default App;
