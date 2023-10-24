import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

export default function ProductsList({ products }) {
  const router = useRouter();
  // Navigate to product's page
  const goToProductPage = (productHandle) =>
    router.push(`/products/${productHandle}`);

  return (
    <Box>
      <ImageList cols={5} gap={20}>
        {products.map((product) => (
          <ImageListItem
            key={product.image}
            style={{ cursor: "pointer" }}
            onClick={() => goToProductPage(product.handle)}
          >
            {/* Product's image*/}
            <img
              src={`${product.image}?w=250&fit=crop&auto=format`}
              srcSet={`${product.image}?w=250&fit=crop&auto=format&dpr=2 2x`}
              alt={product.name}
              loading="lazy"
            />
            {/* Product's name + price under the image */}
            <ImageListItemBar
              title={product.name}
              subtitle={<span>Price: {product.price}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
