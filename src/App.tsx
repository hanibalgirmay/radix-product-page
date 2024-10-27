import { useState } from "react";
import "./App.css";
// import { css } from '@stitches/react';
import { AspectRatio, Box, Grid, Text, Button } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import ProductLayout from "./layout/productLayout";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<ProductLayout />}>
          <Route index element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
