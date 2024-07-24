import React from "react";
// import "./AdminHeader.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="header">
      <ul className="headerul">
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
        <li>
          <Link to="/AddProduct">AddProduct</Link>
        </li>
        <li>
          <Link to="/sellers">Showcase</Link>
        </li>
      </ul>
     
    </section>
  );
}
//     <nav>
//       <ul className={menuOpen ? "open" : ""}>
//         <li>
//           <NavLink 
//             to="/"
//             end
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/AdminProducts"
//             end
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Products
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/AdminOrders"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             View Orders
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/AdminUsers"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             View Users
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
export default AdminNav;
