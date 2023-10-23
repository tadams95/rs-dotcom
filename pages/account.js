import Footer from "@/components/UI/footer";
import Navbar from "@/components/UI/navbar";

export default function Account() {
  return (
    <>
      <Navbar />

      <div className="my-10 px-8">
        This is where the account details will be. There should be a
        login/logout function, order history, and other pertinent details.
      </div>

      <Footer/>
    </>
  );
}
