import Navbar from "@/components/UI/navbar";
import Footer from "@/components/UI/footer";
import Head from "next/head";
import ProductsList from "@/components/ProductList/ProductList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { shopifyClient, parseShopifyResponse } from "@/lib/shopify";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>RAGESTATE</title>
      </Head>
      <Navbar />

      <Box>
        <Container maxWidth="lg">
          <ProductsList products={products} />
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};
