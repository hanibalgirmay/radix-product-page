import { Container } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

const THUMBNAIL_LIMIT = 5;

const ProductImage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]); // Main image state
  const [isScrollable, setIsScrollable] = useState(false); // Check if scrolling is needed

  useEffect(() => {
    console.log(images);
    setIsScrollable(images.length > THUMBNAIL_LIMIT); // Enable scrolling if needed
    setSelectedImage(images[0]); // Reset to the first image when images change
  }, [images]);

  return (
    <div className="image-gallery">
      {/* Main Image */}
      <div className="main-image-container">
        <img src={selectedImage} alt="Product" className="main-image" />
      </div>
      {/* Thumbnails */}
      <div
        className={`thumbnail-container ${isScrollable ? "scrollable" : ""}`}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
