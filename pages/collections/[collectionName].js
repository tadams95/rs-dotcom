import * as React from "react";
import { useRouter } from "next/router";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import PRODUCTS from "@/data/data.js";
import Navbar from "@/components/UI/navbar";
import BreadcrumbsNavigation from "@/components/Breadcrumbs/BreadcrumbsNavigation";
import ProductsList from "@/components/ProductList/ProductList.js";
import Footer from "@/components/UI/footer";
export default function CollectionPage({products, collectionName}) {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg">
        <BreadcrumbsNavigation title={collectionName} />
        <ProductsList products={products} />
      </Container>
      <Footer />
    </Box>
  );
}

export const getServerSideProps = async ({params}) => {
  const { collectionName } = params
  // Fetch all the collections
  const collectionsData = await shopifyClient.collection.fetchAllWithProducts();
  const collections = parseShopifyResponse(collectionsData);
  // Get the right one
  const collection = collections.find(collection => collection.handle === collectionName)

  return {
   props: {
    collectionName,
    products: collection.products,
  },
 };
};
