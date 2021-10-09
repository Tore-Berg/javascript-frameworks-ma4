import Link from "next/dist/client/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about-us">About</Link>
      <Link href="/results">Results</Link>
    </nav>
  );
};

export default Navbar;
