import React from "react";
// Utilities
import { BrowserRouter, Route } from "react-router-dom";
// Components

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  </BrowserRouter>
);

export default App;
