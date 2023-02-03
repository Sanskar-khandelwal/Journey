import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container flex justify-center align-middle text-2xl  shadow-md  fixed top-0 right-0 left-0 bg-white py-4">
        <Link to="/">
          <h1>Achivements</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
