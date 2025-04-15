import { useContext } from "react";
import { context } from "../../context/context";
import Modal from "./Modal";
import { FaGithub } from "react-icons/fa";

const NewsPopup = () => {
  const { showNewsPopup, newsPopup, newsData, color } = useContext(context);

  return (
    <Modal open={newsPopup} close={showNewsPopup}>
      <div className="news_popup_details w-full h-auto clear-both float-left px-[50px] pt-[50px] pb-[42px]">

        {/* Supprimé la section image dynamique */}

        <div className="text w-full float-left">
          {/* Images supplémentaires */}
          {newsData?.extraImages && newsData.extraImages.length > 0 && (
            <div className="mt-[20px] gap-4">
              {newsData.extraImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-[10px] mx-[5px]">
                  <img
                    className="w-full h-auto object-cover"
                    src={image}
                    alt={`Extra ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}
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