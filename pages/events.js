import Footer from "@/components/UI/footer";
import Navbar from "@/components/UI/navbar";

export default function Events() {
  return (
    <>
      <Navbar />
      <div className="my-10 px-8">
        This is where the events will be, we'll have to make sure that events
        are synced to our Firebase database and purchases are linked to distinct
        user's QR codes
      </div>
      <Footer/>
    </>
  );
}
