import { useContext } from "react";
import { context } from "../../context/context";
import Modal from "./Modal";
import { FaGithub } from "react-icons/fa";

const NewsPopup = () => {
  const { showNewsPopup, newsPopup, newsData, color } = useContext(context);

  const getDisplayImage = (newsData) => {
    if (newsData?.title?.includes("AP3")) {
      return "assets/img/news/AP3.png";
    }
    return newsData?.extraImages?.[0] || newsData?.img;
  };

  return (
    <Modal open={newsPopup} close={showNewsPopup}>
      <div className="news_popup_details w-full h-auto clear-both float-left px-[50px] pt-[50px] pb-[42px]">

        {/* Images supplémentaires */}
        <div className="text w-full float-left">
          <div className="mt-[20px] gap-4">
            <div className="relative overflow-hidden rounded-[10px] mx-[5px]">
              <img
                className="w-full h-auto object-cover"
                src={getDisplayImage(newsData)}
                alt={`Image principale`}
              />
            </div>
          </div>
        </div>

        {/* Titre et étiquette */}
        <div className="news_main_title mt-2 flex justify-between items-center">
          <div>
            <h3>{newsData?.title}</h3>
            <span>
              <a
                className="no-underline text-main-color text-[14px] transition-all duration-300 hover:text-white-color"
                href="#"
              >
                {newsData?.tag}
              </a>
            </span>
          </div>
          <div className="flex gap-3">
            {newsData?.githubLink && (
              <a
                href={newsData.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222] hover:bg-pink-color px-4 py-2 rounded-[5px] text-white-color transition-all duration-300 flex items-center gap-2"
                style={{
                  border: `1px solid ${color || "#eb4a4c"}`,
                  boxShadow: `0 0 5px ${color || "#eb4a4c"}40`
                }}
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
            )}
            {newsData?.btsLink && (
              <a
                href={newsData.btsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222] hover:bg-pink-color px-4 py-2 rounded-[5px] text-white-color transition-all duration-300 flex items-center gap-2"
              >
                <span>Voir La documentation</span>
                <i className="icon-right-open-1" />
              </a>
            )}
            {newsData?.docLink && (
              <a
                href={newsData.docLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222] hover:bg-pink-color px-4 py-2 rounded-[5px] text-white-color transition-all duration-300 flex items-center gap-2"
                style={{
                  border: `1px solid ${color || "#eb4a4c"}`,
                  boxShadow: `0 0 5px ${color || "#eb4a4c"}40`
                }}
              >
                <span>Voir la documentation AP1</span>
                <i className="icon-right-open-1" />
              </a>
            )}
            {newsData?.title?.includes("AP1") && newsData?.docLinks && newsData.docLinks.length > 0 && (
              <>
                {newsData.docLinks[1] && (
                  <a
                    href={newsData.docLinks[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222] hover:bg-pink-color px-4 py-2 rounded-[5px] text-white-color transition-all duration-300 flex items-center gap-2"
                    style={{
                      border: `1px solid ${color || "#eb4a4c"}`,
                      boxShadow: `0 0 5px ${color || "#eb4a4c"}40`
                    }}
                  >
                    <span>Doc AP1 - Documentation technique</span>
                    <i className="icon-right-open-1" />
                  </a>
                )}
              </>
            )}
            {newsData?.title?.includes("AP3") && newsData?.docLinks && newsData.docLinks.length > 0 && (
              <>
                <a
                  href={newsData.docLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#222] hover:bg-pink-color px-4 py-2 rounded-[5px] text-white-color transition-all duration-300 flex items-center gap-2"
                  style={{
                    border: `1px solid ${color || "#eb4a4c"}`,
                    boxShadow: `0 0 5px ${color || "#eb4a4c"}40`
                  }}
                >
                  <span>Doc AP3 - Cahier des charges</span>
                  <i className="icon-right-open-1" />
                </a>
                {newsData.docLinks[1] && (
                  <a
                    href={newsData.docLinks[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222] hover:bg-pink-color px-4 py-2 rounded-[5px] text-white-color transition-all duration-300 flex items-center gap-2"
                    style={{
                      border: `1px solid ${color || "#eb4a4c"}`,
                      boxShadow: `0 0 5px ${color || "#eb4a4c"}40`
                    }}
                  >
                    <span>Doc AP3 - Documentation technique</span>
                    <i className="icon-right-open-1" />
                  </a>
                )}
              </>
            )}
            {newsData?.title?.includes("AP4") && newsData?.docLinks && newsData.docLinks.length > 0 && (
              <>
                <a
                  href={newsData.docLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#222] hover:bg-pink-color px-4 py-2 rounded-[5px] text-white-color transition-all duration-300 flex items-center gap-2"
                  style={{
                    border: `1px solid ${color || "#eb4a4c"}`,
                    boxShadow: `0 0 5px ${color || "#eb4a4c"}40`
                  }}
                >
                  <span>Doc AP4 - Cahier des charges</span>
                  <i className="icon-right-open-1" />
                </a>
                {newsData.docLinks[1] && (
                  <a
                    href={newsData.docLinks[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222] hover:bg-pink-color px-4 py-2 rounded-[5px] text-white-color transition-all duration-300 flex items-center gap-2"
                    style={{
                      border: `1px solid ${color || "#eb4a4c"}`,
                      boxShadow: `0 0 5px ${color || "#eb4a4c"}40`
                    }}
                  >
                    <span>Doc AP4 - Documentation technique</span>
                    <i className="icon-right-open-1" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="text w-full float-left">
          {newsData?.des?.map((des, i) => (
            <p key={i} className="mb-[10px]">
              {des}
            </p>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default NewsPopup;