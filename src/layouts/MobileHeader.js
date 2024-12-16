import { Fragment, memo, useContext, useState } from "react";
import { context } from "../context/context";
import { menus } from "./menus";
const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;

  const activeNav = (value) => (value == nav ? "active" : "");
  const onClick = (value) => {
    setToggle(false);
    changeNav(value);
  };

  return (
    <Fragment>
      <div className="edrea_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-black z-[10] hidden">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between pb-0 pt-[0px] px-[20px]">
          <div className="logo">
            <a href="#">
              <img
                className="max-w-[140px] max-h-[40px]"
                src="assets/img/logo/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`edrea_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-black transition-all duration-300 ${
          toggle ? "opened" : ""
        }`}
      >
        <div className="inner relative w-full h-full text-right px-[20px] pt-[50px] pb-[20px]">
          <div className="menu_list w-full h-auto clear-both float-left">
            <ul className="transition_link m-0 list-none">
              {menus.map((menu, i) => (
                <li
                  className={`mr-[70px] ${activeNav(menu.href)}`}
                  key={menu.href}
                >
                  <a
                    onClick={() => onClick(menu.href)}
                    className="text-white-color font-poppins"
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
    </Fragment>
  );
};
export default memo(MobileHeader);
