import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/UI/navbar";
import Footer from "@/components/UI/footer";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>

    <div  className="my-10 px-8">
      This is the home page, pretty much the place to showcase RAGESTATE. A mix of merch and upcoming events.
    </div>

    <Footer/>
    </>
  );
}
