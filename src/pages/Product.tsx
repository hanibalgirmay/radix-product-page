import {
  Box,
  Button,
  Card,
  ChevronDownIcon,
  Container,
  DropdownMenu,
  Grid,
  Inset,
  Select,
  Strong,
  Text,
  ThickCheckIcon,
} from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import ProductImage from "../components/ProductImage";
import { useCartStore } from "../store";

const Product = () => {
  const [productData, setProductData] = useState(null); // Holds product data fetched from JSON
  const [selectedSize, setSelectedSize] = useState(""); // Tracks selected size
  const [selectedColor, setSelectedColor] = useState(""); // Tracks selected color
  const [images, setImages] = useState([]); // Stores images for selected size/colo

  // load state
  const { carts, addToCart, resetCart } = useCartStore();

  const handleAddToCart = (i) => {
    //handle add to card
    addToCart(i);
  };

  const handleChangeNumber = (i) => {
    //when number changed update state
    console.log("number", i);
    if (i < 1) {
      resetCart();
    }
  };

  // Fetch product data from the JSON file on component mount
  useEffect(() => {
    fetch("/mock.json")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data); // Store the fetched product data
        const initialSize = Object.keys(data.sizes)[0]; // Default to the first available size
        // const initialColor = Object.keys(data.sizes[initialSize].colors)[0]; // Default color
        console.log("====================================");
        console.log({ initialSize, data });
        console.log("====================================");
        setSelectedSize(data?.sizes[0]);
        setSelectedColor(data?.colors[0]);
        // setSelectedColor(initialColor);
        setImages(data.images[0]); // Load default images
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  if (!productData) return <p>Loading...</p>; // Display loading message

  return (
    <Grid
      style={{ background: "" }}
      columns={"2"}
      gap="3"
      rows="repeat(2, auto)"
    >
      <Container size={"4"} style={{ backgroundColor: "" }}>
        <ProductImage images={productData?.images || []} />
      </Container>
      <Box>
        <Container mt={"3rem"} p={"2rem"}>
          <Box>
            <h1 className="product-name">
              {productData?.name} {selectedSize}
            </h1>
            <Text
              as="p"
              size={"8"}
              weight={"bold"}
              prefix="$"
              className="product-price"
            >
              ${productData?.price}
            </Text>
            <p className="product-description">{productData.description}</p>

            {/* Size Selector using Radix UI's Select component */}
            <div className="selector-group">
              <div
                style={{ display: "flex", gap: "1rem" }}
                className="selector"
              >
                <label>Select Size:</label>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="soft">
                      {selectedSize}
                      <DropdownMenu.TriggerIcon />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    {productData?.sizes?.map((i) => (
                      <DropdownMenu.Item
                        onClick={() => setSelectedSize(i)}
                        textValue={i}
                      >
                        {i}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </div>

              {/* Color Selector */}
              <div className="selector">
                <label>Select Color: {selectedColor}</label>
                <div className="color-options">
                  {productData?.colors?.map((color) => {
                    return (
                      <Button
                        key={color}
                        className={`color-button ${
                          color === selectedColor ? "active" : ""
                        }`}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select ${color}`}
                        style={{
                          backgroundColor: color,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "40px",
                          height: "40px",
                          border:
                            color === selectedColor
                              ? "2px solid #ff6f00"
                              : "1px solid #ddd",
                          borderRadius: "50%",
                          padding: 0,
                          cursor: "pointer",
                          marginRight: "8px",
                        }}
                      ></Button>
                    );
                  })}
                </div>
              </div>

              {carts.length === 0 ? (
                <Button
                  onClick={() => handleAddToCart(productData)}
                  style={{
                    padding: "1.2rem 1rem",
                    marginTop: "2rem",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="https://s2.svgbox.net/hero-outline.svg?ic=shopping-cart&color=fff"
                    width="22"
                    height="22"
                  />{" "}
                  Add to Cart
                </Button>
              ) : (
                <input
                  type="number"
                  min={0}
                  style={{
                    marginTop: "2rem",
                    padding: "0.7rem 1rem",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    outline: "none",
                  }}
                  defaultValue={1}
                  onChange={(e) => handleChangeNumber(e.target.value)}
                />
              )}
            </div>
            <Text mt={"9"}>
              <Text as="label" weight={"bold"}>
                Specification
              </Text>
              <ul className="flex-list">
                {productData?.features.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </Text>
          </Box>
        </Container>
      </Box>
    </Grid>
  );
};

export default Product;
