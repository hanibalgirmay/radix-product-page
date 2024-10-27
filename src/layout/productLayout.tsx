import { Box, Container } from "@radix-ui/themes";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const ProductLayout = () => {
  return (
    <Box
      m={"0"}
      p={"0"}
      minHeight={"90vh"}
      style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}
    >
      <Header />
      {/* <Container width={"100%"} size="4"> */}
        {/* <DecorativeBox> */}
        {/* <Box py="9" /> */}
        <Outlet />
        {/* </DecorativeBox> */}
      {/* </Container> */}
    </Box>
  );
};

export default ProductLayout;
