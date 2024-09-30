import { NavLink } from "react-router-dom";

// receive 2 params , path use to router jump and name use to show on page, the navlink  have a special make up when is active
const MyNav = ({ path, name }: { path: string; name: string }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "border-b-4 border-black" : "")}
      to={path}
    >
      {name}
    </NavLink>
  );
};

export default MyNav;
