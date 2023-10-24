import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ProductsList from "@/components/ProductList/ProductList";
import PRODUCTS from "@/data/data";
import Navbar from "@/components/UI/navbar";
import BreadcrumbsNavigation from "@/components/Breadcrumbs/BreadcrumbsNavigation";
import Footer from "@/components/UI/footer";

export default function ProductPage() {
  const router = useRouter();
  // Get productHandle from url: /products/[productHandle]
  const { productHandle } = router.query;
  // Get product data
  const product = PRODUCTS.find(
    (product) => product.handle === parseInt(productHandle)
  );
  const { name, image, price } = product || {};

  return (
    <Box>
      <Navbar />
      {product && (
        <Container maxWidth="lg">
          <BreadcrumbsNavigation title={name} />
          <Grid container direction="row">
            <Grid item xs={6}>
              <Image
                src={image}
                alt={`Picture of ${name}`}
                width={500}
                height={500}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3" my={2}>
                {name}
              </Typography>
              <Grid mt={4}>
                <Typography variant="h6" component="span">
                  Price:{" "}
                </Typography>
                <Typography variant="body1" component="span">
                  {price}
                </Typography>
              </Grid>
              <Grid mt={1}>
                <Button variant="contained">Add to cart</Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
      <Footer/>
    </Box>
    
  );
}
