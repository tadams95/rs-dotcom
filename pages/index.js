import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/UI/navbar";
import Footer from "@/components/UI/footer";
import Head from "next/head";
import ProductsList from "@/components/ProductList/ProductList";
import PRODUCTS from "@/data/data";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="my-10 px-8">
        This is the home page, pretty much the place to showcase RAGESTATE. A
        mix of merch and upcoming events.
      </div>

      <Box>
        <Container maxWidth="lg">
          <ProductsList products={PRODUCTS} />
        </Container>
      </Box>

      <Footer />
    </>
  );
}
