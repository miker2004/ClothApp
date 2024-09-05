import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Navigation(){
  return(
    <>
    <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          Products
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
    </nav>
    </>
  );
}
