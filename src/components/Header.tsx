import { Button, Text } from "@radix-ui/themes";
import React from "react";
import { useCartStore } from "../store";

const Header = () => {
  const { carts, totalNumbers} = useCartStore();

  return (
    <div className="navbar">
      <div className="navbar-brand">Radix Commerce</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#" className="navbar-link">
          Products
        </a>
        <Button
          style={{ position: "relative", overflow: "visible" }}
          className="navbar-link"
        >
          <img
            src="https://s2.svgbox.net/hero-outline.svg?ic=shopping-cart&color=000"
            width="22"
            height="22"
          ></img>
          <Text
            as="div"
            style={{
              position: "absolute",
              top: "-5px",
              background: "black",
              right: "-2px",
              width: "20px",
              color: "red",
              height: "20px",
              borderRadius: "50%",
            }}
          >
            <Text
              as="span"
              size={"1"}
              style={{
                width: "100%",
                color: "red",
                height: "100%",
                borderRadius: "50%",
              }}
            >
              {totalNumbers}
            </Text>
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Header;
