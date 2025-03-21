import React from "react";
import { useContext } from "react";
import { context } from "../context/context";
import { FaEye, FaDownload } from "react-icons/fa";


const BTS = () => {
  const { nav } = useContext(context);

  return (
    <div className={`edrea_tm_section ${nav === "BTS" ? "active" : ""}`} id="BTS">
      <div className="section_inner">
        <div className="edrea_tm_about w-full h-auto clear-both float-left relative">
          <div className="fixed top-[80px] left-0 right-0 z-20">
            <div className="edrea_tm_main_title py-4 w-full mb-10">
              <h3>
                BTS <span className="text-pink-color">SIO</span>
              </h3>
            </div>
          </div>

          <div className="content-wrapper mt-[180px] max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-hide">
            <div className="about_wrapper w-full h-auto clear-both float-left">
              <div className="left w-full float-left mb-[40px]">
                <div className="text w-full float-left mb-[40px]">
                  <p className="mb-[15px]">
                    Le Brevet de Technicien Supérieur - Services Informatiques aux Organisations (BTS SIO)
                    s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur.
                    Pour par la suite intégrer directement le marché du travail ou continuer des études, dans le domaine de l'informatique.
                  </p>
                </div>

                {/* Options */}
                <div className="options w-full float-left flex flex-wrap gap-[30px] mb-[40px]">
                  <div className="option_box w-[calc(50%-15px)] bg-[#222] p-[30px] rounded-[10px]">
                    <h4 className="text-[20px] mb-[15px] text-pink-color">SISR</h4>
                    <p>
                      SOLUTIONS D'INFRASTRUCTURE, SYSTEMES ET RESEAUX
                      La spécialisation SISR forme des professionnels des réseaux et équipements informatiques
                      (installation, maintenance, sécurité). Cela signifie intervenir sur la conception,
                      la mise en place, le déploiement, la maintenance et le maintien de sa sécurité.
                    </p>
                  </div>
                  <div className="option_box w-[calc(50%-15px)] bg-[#222] p-[30px] rounded-[10px]">
                    <h4 className="text-[20px] mb-[15px] text-pink-color">SLAM</h4>
                    <p>
                      SOLUTIONS LOGICIELLES ET APPLICATIONS METIERS
                      La spécialisation SLAM est plus orientée développement.
                      Elle forme des professionnels au développement d'applications,
                      (sites web, applications mobiles, logiciels) et à la rédaction de
                      documentations techniques liées à celles-ci.
                    </p>
                  </div>
                </div>

                {/* Débouchés */}
                <div className="skills w-full float-left mb-[40px]">
                  <h4 className="text-[20px] mb-[20px]">Débouchés</h4>
                  <div className="flex flex-wrap gap-[30px]">
                    <div className="w-[calc(50%-15px)]">
                      <h5 className="text-pink-color mb-[10px]">SISR</h5>
                      <ul className="list-disc pl-5">
                        <li className="mb-[10px]">Administrateur(trice) système, réseau et sécurité</li>
                        <li className="mb-[10px]">Chef(fe) de projet logiciel et réseau</li>
                        <li className="mb-[10px]">Concepteur de systèmes d'information</li>
                        <li className="mb-[10px]">Responsable en ingénierie systèmes et réseaux</li>
                      </ul>
                    </div>
                    <div className="w-[calc(50%-15px)]">
                      <h5 className="text-pink-color mb-[10px]">SLAM</h5>
                      <ul className="list-disc pl-5">
                        <li className="mb-[10px]">Chef de projet web et stratégie digitale</li>
                        <li className="mb-[10px]">Concepteur développeur web</li>
                        <li className="mb-[10px]">Développeur de solutions mobiles et connectées</li>
                        <li className="mb-[10px]">Concepteur développeur d'applications</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* IPSSI */}
                <div className="stages w-full float-left mb-[40px]">
                  <h4 className="text-[20px] mb-[20px]">IPSSI</h4>
                  <p className="mb-[15px]">
                    L'IPSSI, Institut Privé Supérieur des Systèmes d'Information,
                    se distingue par son engagement à former la prochaine génération de professionnels de l'informatique.
                    Située au cœur de la région parisienne, l'IPSSI offre un environnement propice à l'apprentissage,
                    avec des infrastructures modernes et des équipements à la pointe de la technologie.
                  </p>
                </div>
              </div>
            </div>

            {/* Boutons déplacés ici, après tout le contenu */}
            <div className="w-full flex flex-col items-center gap-4 py-[40px]">

              <a
                href="https://docs.google.com/spreadsheets/d/1XwalSPwd7GKfJQ4WcQkXJPLfYZY2sj-t/edit?usp=sharing&ouid=118027636092971870930&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222] hover:bg-[#333] px-8 py-3 rounded-[10px] transition-all duration-300 flex items-center gap-2"
              >
                <FaEye />
                Consulter Mon Tableau De Synthèse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTS;