import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="blog-navbar">
      <h1>The Blog</h1>
      <div className="links">
        <Link to="/project4/">Home</Link>
        <Link
          to="/project4/create"
        >
          Create New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
