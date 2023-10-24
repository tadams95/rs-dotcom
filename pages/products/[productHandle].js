import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Navbar from "@/components/UI/navbar";
import BreadcrumbsNavigation from "@/components/Breadcrumbs/BreadcrumbsNavigation";
import Footer from "@/components/UI/footer";

import { shopifyClient } from "@/lib/shopify";
import { parseShopifyResponse } from "@/lib/shopify";

export default function ProductPage({ product }) {
  const { id, title, images, variants, handle, description } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];


  return (
    <>
      <Box>
        <Navbar />
        {product && (
          <Container maxWidth="lg">
            <BreadcrumbsNavigation title={title} />
            <Grid container direction="row">
              <Grid item xs={6}>
                <Image
                  src={productImage}
                  alt={`Picture of ${title}`}
                  width={500}
                  automatically
                  provided
                  height={500}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h3" my={2}>
                  {title}
                </Typography>
                <Grid mt={2}>
                  <Typography mb={8} variant="body2" component="span">
                    {description}
                  </Typography>
                  <div>
                    <Typography mt={2} variant="h7" component="span">
                      Price:{" "}
                    </Typography>

                    <Typography mt={2} variant="body1" component="span">
                      {price.amount} {price.currencyCode}
                    </Typography>
                  </div>
                </Grid>

                <Grid mt={1}>
                  <Button variant="outlined">Add to cart</Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        )}
      </Box>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { productHandle } = params;
  // Fetch one product
  const product = await shopifyClient.product.fetchByHandle(productHandle);

  return {
    props: {
      product: parseShopifyResponse(product),
    },
  };
};
