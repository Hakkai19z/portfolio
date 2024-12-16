import { useContext } from "react";
import { context } from "../context/context";
import { menus } from "./menus";

const Header = () => {
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;

  const activeNav = (value) => (value == nav ? "active" : "");

  return (
    <div className="edrea_tm_header fixed w-[900px] translate-x-[-50%] left-[50%]">
      <div className="header_inner w-full h-auto float-left pt-[40px] flex items-center justify-between">
        <div className="logo">
          <a href="#" onClick={() => changeNav("home")}>
            <img
              className="max-w-[100px]"
              src="assets/img/logo/logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="menu">
          <ul className="transition_link m-0 list-none">
            {menus.map((menu, i) => (
              <li
                className={`mr-[30px] inline-block ${activeNav(menu.href)}`}
                key={menu.href}
              >
                <a
                  onClick={() => changeNav(menu.href)}
                  className="text-white-color font-poppins font-medium transition-all duration-300"
                  href={`#${menu.href}`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
