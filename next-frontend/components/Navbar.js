import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b-2 border-black">
      <div className="flex items-center">
        <div className="mr-4">
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
        </div>
      </div>
      <div className="sm:flex">
        <a href="/" className="mr-4">
          Home
        </a>
        <a href="/project-ideas" className="mr-4">
          Project ideas
        </a>
        <a href="/blog">Blog</a>
      </div>
      <div className=" sm:block">
        <Image
          src="/profile_image.jpg"
          alt="Profile Image"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
