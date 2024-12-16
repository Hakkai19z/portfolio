import { useContext } from "react";
import { context } from "../../context/context";
import Modal from "./Modal";

const PortfolioModal = () => {
  const { showPortfolioPopup, portfolioPopup } = useContext(context);
  return (
    <Modal close={showPortfolioPopup} open={portfolioPopup}>
      <div className="portfolio_popup_details w-full h-auto clear-both float-left px-[50px] pt-[50px] pb-[50px]">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url="assets/img/portfolio/4.jpg"
            style={{ backgroundImage: 'url("assets/img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>Internet des Objets (IOT)</h3>
          <span>
            <a href="#">Detail</a>
          </span>
          <div />
        </div>
        <div className="text w-full float-left mb-[42px]">
          <p className="mb-[10px]">
            L'Internet des Objets (IoT) représente une révolution technologique
            en constante évolution qui transforme notre façon d'interagir avec
            notre environnement. Cette technologie permet à des objets physiques
            de collecter et d'échanger des données via Internet, créant un
            réseau interconnecté d'une complexité et d'une richesse sans
            précédent. Les dispositifs IoT, qu'il s'agisse de capteurs
            environnementaux, d'appareils domestiques connectés ou de systèmes
            industriels automatisés, génèrent continuellement des données
            précieuses qui peuvent être analysées pour optimiser les processus
            et améliorer la prise de décision.
          </p>
          <p>
            Les applications de l'IoT s'étendent bien au-delà de la domotique,
            touchant des domaines aussi variés que l'agriculture de précision,
            la surveillance médicale à distance, la gestion intelligente des
            villes et l'optimisation des chaînes de production industrielles.
            Cette technologie offre des opportunités uniques pour améliorer
            l'efficacité énergétique et réduire les coûts opérationnels, tout en
            soulevant des défis importants en termes de sécurité des données, de
            confidentialité et d'interopérabilité entre les différents systèmes,
            faisant de la standardisation des protocoles et du renforcement de
            la cybersécurité des enjeux cruciaux.
          </p>
        </div>
        <div className="additional_images w-full h-auto clear-both float-left">
          <ul className="gallery_zoom ml-[-30px] list-none">
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src="assets/img/thumbs/4-2.jpg"
                    alt=""
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[10px]"
                    data-img-url="assets/img/portfolio/7.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/7.jpg")',
                    }}
                  />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="assets/img/portfolio/7.jpg"
                  />
                </div>
              </div>
            </li>
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src="assets/img/thumbs/4-2.jpg"
                    alt=""
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[10px]"
                    data-img-url="assets/img/portfolio/8.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/8.jpg")',
                    }}
                  />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="assets/img/portfolio/8.jpg"
                  />
                </div>
              </div>
            </li>
            <li className="mb-[30px] float-left w-1/2 pl-[30px]">
              <div className="list_inner w-full h-auto clear-both float-left relative">
                <div className="image relative">
                  <img
                    className="opacity-0 min-w-full"
                    src="assets/img/thumbs/4-2.jpg"
                    alt=""
                  />
                  <div
                    className="main absolute inset-0 bg-no-repeat bg-center bg-cover rounded-[10px]"
                    data-img-url="assets/img/portfolio/9.jpg"
                    style={{
                      backgroundImage: 'url("assets/img/portfolio/9.jpg")',
                    }}
                  />
                  <a
                    className="edrea_tm_full_link zoom"
                    href="assets/img/portfolio/9.jpg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;
