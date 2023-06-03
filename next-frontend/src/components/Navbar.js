import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between bg-white py-10 text-black">
        <h1>NextAuth</h1>
        <ul className="flex">
          <li className="px-2">
            {" "}
            <Link href="#">Home</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link href="#">Dashboard</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link href="#">Sign In</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link href="#">Sign Out</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
