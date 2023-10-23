import Footer from "@/components/UI/footer";
import Navbar from "@/components/UI/navbar";

export default function Shop() {
    return (
        <> 
        <Navbar />

        <div className="my-10 px-8">
        This is where the shop will be
        </div>

        <div className="my-10 px-8">
            It'd be useful to have a choice of categories. 
        </div>

        <div className="my-10 px-8">
            The shop will need to be integrated with our Shopify API to populate merchandise.
        </div>

        <Footer/>
        </>
    )
}