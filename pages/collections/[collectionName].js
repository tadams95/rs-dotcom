import * as React from "react";
import { useRouter } from "next/router";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PRODUCTS from "@/data/data.js";
import Navbar from "@/components/UI/navbar";
import BreadcrumbsNavigation from "@/components/Breadcrumbs/BreadcrumbsNavigation";
import ProductsList from "@/components/ProductList/ProductList.js";
import Footer from "@/components/UI/footer";

export default function CollectionPage() {
  const router = useRouter();
  const { collectionName } = router.query;
  const products = PRODUCTS.filter(
    (product) => product.collection === collectionName
  );
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg">
        <BreadcrumbsNavigation collection={collectionName} />
        <ProductsList products={products} />
      </Container>
      <Footer/>
    </Box>
  );
}
