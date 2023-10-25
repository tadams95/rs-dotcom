import * as React from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const ProductCard = ({ product, goToProductPage }) => {
  const { id, title, images, variants, handle } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={`${productImage}?w=400&h=400&fit=crop`}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md text-gray-900">
            <a href={`/products/${handle}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            ${Number(price.amount).toFixed(2).replace(/\.0*$/, "")}{" "}
            {price.currencyCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ProductsList({ products }) {
  const router = useRouter();
  // Navigate to product page with handle i.e /products/black-converses
  const goToProductPage = (productHandle) =>
    router.push(`/products/${productHandle}`);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.handle}
                product={product}
                goToProductPage={goToProductPage}
              />
            ))
          ) : (
            <Typography variant="body1" align="center">
              There are no products in this collection
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}
