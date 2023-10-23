import Footer from "@/components/UI/footer";
import Navbar from "@/components/UI/navbar";

export default function Cart() {
    return (
        <> 
        <Navbar />

        <div className="my-10 px-8">
        This is where the cart will be
        </div>
        <p  className="my-10 px-8">
            Any items that a user adds to cart from shop and/or events will need to appear here.
        </p>
        <Footer/>
        </>
    )
}