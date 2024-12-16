import { Fragment, useEffect, useContext } from "react";
import AboutPopup from "../components/popup/AboutModal";
import ImageView from "../components/popup/ImageView";
import NewsPopup from "../components/popup/NewsPopup";
import PortfolioModal from "../components/popup/PortfolioModal";
import VideoPopup from "../components/popup/VideoPopup";
import { dataImage, imgToSVG } from "../utilities";
import { waves } from "../waves";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Mouse from "./Mouse";
import PreLoader from "./PreLoader";
import Setting from "./Setting";
import { Home, About, Contact, News, Portfolio, BTS } from "../components";
import { context } from "../context/context";

const Layout = ({ children }) => {
  const { changeNav } = useContext(context);

  useEffect(() => {
    waves();
    dataImage();
    imgToSVG();
    changeNav("home");
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <AboutPopup />
      <div
        className="edrea_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="fadeInUp"
        data-exit=""
      >
        <NewsPopup />
        <PortfolioModal />
        <PreLoader />
        <div className="waves" />
        <Setting />
        <MobileHeader />
        <Header />
        <div className="edrea_tm_content fixed w-[900px] top-[100px] bottom-[100px] left-[50%] translate-x-[-50%]">
          <Home />
          <About />
          <Portfolio />
          <News />
          <BTS />
          <Contact />
        </div>
        <Mouse />
      </div>
    </Fragment>
  );
};
export default Layout;
