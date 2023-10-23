export default function Footer() {
    return (
      <footer>
        <div className="container mx-auto px-6">
          <div className="mt-5 flex flex-col items-center">
            <div className="py-6">
              <p className="mb-6 text-black text-md text-primary-2 font-bold">
                © {new Date().getFullYear()} RAGESTATE, LLC
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  