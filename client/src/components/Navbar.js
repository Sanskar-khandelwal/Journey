import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container h-20 flex justify-center align-middle text-4xl font-medium mb-10 shadow-md my-10">
        <Link to="/">
          <h1>Achivements</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
