import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { portfolioSlider } from "../sliderProps";

const Portfolio = () => {
  const { showPortfolioPopup } = useContext(context);
  return (
    <div className="edrea_tm_section" id="portfolio">
      <div className="section_inner">
        <div className="edrea_tm_portfolio swiper-section w-full h-auto clear-both float-left">
          <div className="edrea_tm_main_title">
            <h3>
              Mes <span className="text-pink-color">Veilles Technologiques</span>
            </h3>
          </div>
          <div className="portfolio_list gallery_zoom w-full h-auto clear-both float-left pt-[60px]">
            <Swiper {...portfolioSlider} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                    <div className="image relative overflow-hidden">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                        data-img-url="assets/img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="details absolute z-[2] bottom-[-100] left-[20px] bg-white-color px-[20px] py-[10px] rounded-[5px] transition-all duration-300">
                      <h3 className="text-black text-[15px] mb-[2px]">
                        Veille sur l'IOT
                      </h3>
                      <span className="text-[#777] text-[14px]">Detail</span>
                    </div>
                    <a
                      className="edrea_tm_full_link portfolio_popup"
                      href="#"
                      onClick={() => showPortfolioPopup()}
                    />
                  </div>
                </SwiperSlide>
              </div>
              <div className="edrea_tm_swiper_progress fill">
                <div className="my_pagination_in">
                  <span className="current" />
                  <span className="pagination_progress">
                    <span className="all">
                      <span />
                    </span>
                  </span>
                  <span className="total" />
                </div>
                <div className="my_navigation">
                  <ul>
                    <li>
                      <a className="my_prev" href="#">
                        <i className="icon-left-open-1" />
                      </a>
                    </li>
                    <li>
                      <a className="my_next" href="#">
                        <i className="icon-right-open-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
