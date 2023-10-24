import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const Product = ({ product, goToProductPage }) => {
  const { id, title, images, variants, handle } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];


  return (
    <ImageListItem
      style={{ cursor: "pointer" }}
      onClick={() => goToProductPage(handle)}
    >
      <img
        src={`${productImage}?w=248&fit=crop&auto=format`}
        srcSet={`${productImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
        className="py-4"
      />
      <ImageListItemBar
        title={
          <span className="text-lg py-2 text-center mx-auto">{title}</span>
        }
        subtitle={
          <span className="text-md font-medium text-green-700 pt-1 text-center mx-auto">
            ${price.amount}0 {price.currencyCode}
          </span>
        }
        position="below"
      />
    </ImageListItem>
  );
};
export default function ProductsList({ products }) {
  const router = useRouter();
  // Navigate to product page with handle i.e /products/black-converses
  const goToProductPage = (productHandle) =>
    router.push(`/products/${productHandle}`);

  return (
    <Box>
      {products && products.length > 0 ? (
        <ImageList cols={5} gap={4}>
          {products.map((product) => (
            <Product
              key={product.handle}
              product={product}
              goToProductPage={goToProductPage}
            />
          ))}
        </ImageList>
      ) : (
        <Typography variant="body1" align="center">
          There are no products in this collection
        </Typography>
      )}
    </Box>
  );
}
