const type = {
  NAV: "NAV",
  COLOR: "COLOR",
  CURSOR: "CURSOR",
  NEWS_POPUP: "NEWS_POPUP",
  PORTFOLIO_POPUP: "PORTFOLIO_POPUP",
  ABOUT_POPUP: "ABOUT_POPUP",
};

import { createContext, useReducer } from "react";
import { activeSection } from "../utilities";
const context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case type.CURSOR:
      return {
        ...state,
        magicCursor: action.payload,
      };
    case type.NEWS_POPUP:
      return {
        ...state,
        newsPopup: !state.newsPopup,
        newsData: action.payload,
      };
    case type.PORTFOLIO_POPUP:
      return {
        ...state,
        portfolioPopup: !state.portfolioPopup,
      };
    case type.ABOUT_POPUP:
      return {
        ...state,
        aboutPopup: !state.aboutPopup,
      };
    default:
      return state;
  }
};

const state = (props) => {
  const initialState = {
    nav: "home",
    color: "#eb4a4c",
    magicCursor: "show",
    newsPopup: false,
    newsData: null,
    portfolioPopup: false,
    aboutPopup: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = (value) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
    activeSection(value);
  };
  const getMagicCursor = (value) => {
    let cursor = localStorage.getItem("edreaa-megic-cursor");
    dispatch({
      type: type.CURSOR,
      payload: cursor ? cursor : value,
    });
    document
      .querySelector(".edrea_tm_all_wrap")
      .setAttribute("data-magic-cursor", cursor ? cursor : value);
  };

  const changeCursor = (value) => {
    document
      .querySelector(".edrea_tm_all_wrap")
      .setAttribute("data-magic-cursor", value);
    localStorage.setItem("edreaa-megic-cursor", value);
    dispatch({
      type: type.CURSOR,
      payload: value,
    });
  };

  const getColor = (value) => {
    let color = localStorage.getItem("edreaa-color");
    document.documentElement.style.setProperty(
      "--pink-color",
      color ? color : value
    );
    dispatch({
      type: type.COLOR,
      payload: color ? color : value,
    });
  };

  const colorChange = (value) => {
    document.documentElement.style.setProperty("--pink-color", value);
    localStorage.setItem("edreaa-color", value);
    dispatch({
      type: type.COLOR,
      payload: value,
    });
  };

  const showNewsPopup = (value) => {
    dispatch({
      type: type.NEWS_POPUP,
      payload: value,
    });
  };

  const showPortfolioPopup = () => {
    dispatch({
      type: type.PORTFOLIO_POPUP,
    });
  };
  const showAboutPopup = () => {
    dispatch({
      type: type.ABOUT_POPUP,
    });
  };

  const {
    nav,
    color,
    magicCursor,
    newsPopup,
    newsData,
    portfolioPopup,
    aboutPopup,
  } = state;
  return (
    <context.Provider
      value={{
        changeNav,
        nav,
        colorChange,
        getColor,
        color,
        getMagicCursor,
        changeCursor,
        magicCursor,
        showNewsPopup,
        newsPopup,
        newsData,
        showPortfolioPopup,
        portfolioPopup,
        aboutPopup,
        showAboutPopup,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default state;

export { context };
