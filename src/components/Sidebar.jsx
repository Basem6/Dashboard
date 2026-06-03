import { NavLink } from "react-router-dom";
import { navItems } from "../utils/data";

export default function Sidebar() {
  return (
    <aside className="bg-[#131419] aside md:max-w-[20%] lg:w-[15%] h-full py-7 px-2 flex flex-col items-start gap-5 fixed">
      <div className="logo w-16 h-16 relative left-1/2 -translate-x-1/2 scale-125 mb-3">
        <img src="/assests/icons/logo.svg" alt="" className="drop-shadow-2xl shadow-[#78abf2]" />
      </div>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `${item.label} nav ${isActive ? "active" : ""}`}
        >
          <span className={item.icon} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </aside>
  );
}
