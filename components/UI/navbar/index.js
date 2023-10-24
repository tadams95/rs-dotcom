import Link from "next/link";
import Head from "next/head";

export default function Navbar() {
  return (
    <>
      <Head>
        <title>RAGESTATE</title>
      </Head>
      <section>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative" aria-label="Global">
            <div className="flex justify-between items-center">
              <div>
                <Link
                  href="/"
                  className="font-medium mr-8 text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="font-medium mr-8 text-gray-600 hover:text-gray-900"
                >
                  Shop
                </Link>
                <Link
                  href="/events"
                  className="font-medium mr-8 text-gray-600 hover:text-gray-900"
                >
                  Events
                </Link>
                {/* <Link
                  href="/blog"
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                >
                  Blog
                </Link> */}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "75px",
                }}
              >
                <Link
                  href="/"
                  className="font-medium text-black"
                  style={{ fontSize: "1.75rem" }}
                >
                  RAGESTATE
                </Link>
              </div>

              <div>
                <Link
                  href="/cart"
                  className="font-medium mr-8 text-gray-600 hover:text-gray-900"
                >
                  Cart
                </Link>
                <Link
                  href="/account"
                  className="font-medium mr-8 text-gray-600 hover:text-gray-900"
                >
                  Account
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}


