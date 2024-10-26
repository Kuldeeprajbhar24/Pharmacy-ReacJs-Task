import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";

import "./Header.css";
function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <img src="https://t3.ftcdn.net/jpg/02/17/90/86/240_F_217908634_hn7l10VuOpBEE5ry0TKSeA8aHfBojNkG.jpg" alt="" />
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
       <nav>
        <Link to="/"><IoHomeSharp />
        </Link>
        <Link to="/cart"><FaShoppingCart />
        </Link>
        <Link to="/about"><GrGroup /></Link>
      </nav>
    </header>
  );
}

export default Header;
