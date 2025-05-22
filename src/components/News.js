import { Fragment, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { newsSlider } from "../sliderProps";

const data = [
  {
    title: "AP1 - Space Odyssey design and development",
    img: "assets/img/news/10.jpg",
    tag: "Php, Javascript, HTML, CSS",
    des: [
      "Pour mon premier projet (AP1), j'ai créé un site nommé Space Odyssey, qui propose un service innovant de réservation de vols et d'hôtels dans l'espace. J'ai imaginé l'identité de l'entreprise, conçu un logo, élaboré une charte graphique et trouvé un slogan accrocheur.",
      "J'ai également décrit les produits et services, précisé le statut juridique fictif, et analysé la concurrence. Le site a été développé en HTML, CSS et JavaScript, avec un travail sur le référencement pour optimiser sa visibilité sur les moteurs de recherche et LinkedIn.",
    ],
    extraImages: ["assets/img/news/15.jpg"],
    githubLink: "https://github.com/Waayne78/SpaceOdyssey.git",
    docLink: "https://www.canva.com/design/DAF6n4U5Z9c/1mNmi_Lm7cnIxC-AUftduQ/view?utm_content=DAF6n4U5Z9c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hef5afe5101",
    docLinks: [
      "https://www.canva.com/design/DAF6n4U5Z9c/1mNmi_Lm7cnIxC-AUftduQ/view?utm_content=DAF6n4U5Z9c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hef5afe5101",
      "https://drive.google.com/file/d/1Rvh-DoEz-aiQQ30ogCGJBTnkbF9h7ZW-/view?usp=sharing"
    ],
  },
  {
    title: "AP2 - Début et gestion du projet AP3/AP4",
    img: "assets/img/news/Gemini_Generated.jpg",
    tag: "Gestion de projet, Analyse",
    des: [
      "L'AP2 marque le début et la gestion de mon projet AP3 et AP4. J'y ai posé les bases de l'analyse, de la planification et de la structuration du projet, en préparant toute la documentation nécessaire pour la suite du développement.",
      "Ce travail a permis d'assurer une transition fluide vers les phases de développement (AP3) et de finalisation (AP4)."
    ],
    extraImages: ["assets/img/news/Gemini_Generated.jpg"],
    docLinks: [
      "https://drive.google.com/file/d/1Z9eHr6WigeBCbeKm1jVcD_sIL2zbHISA/view?usp=sharing"
    ]
  },
  {
    title: "Mon AP3 - GSB MedOrder",
    img: "assets/img/news/ap3-logo.png",
    tag: "React, PHP, Javascript",
    des: [
      "J'ai développé l'application GSB MedOrder dans le cadre de mon AP3, qui est une application de gestion de commandes de médicaments pour le laboratoire Galaxy Swiss Bourdin.",
      "Ce projet utilise React pour le frontend et PHP pour le backend, offrant une interface moderne et intuitive pour les utilisateurs.",
      "L'application permet aux visiteurs médicaux de passer des commandes de médicaments, de suivre l'état de leurs commandes, et aux administrateurs de gérer l'ensemble du processus de commande.",
    ],
    extraImages: ["assets/img/news/AP3.png"],
    githubLink: "https://github.com/Waayne78/GSB-MedOrder.git",
    docLinks: [
      "https://drive.google.com/file/d/1G01Op_AHxjt7pCqr6haGFNgrY24kPUIu/view?usp=sharing",
      "https://drive.google.com/file/d/1C__Pu-D5cNZ5qqxoxLLggz71uTM0JTiS/view?usp=sharing"
    ],
  },
  {
    title: "Mon AP4 - Application Mobile",
    img: "assets/img/news/ap4-logo.png",
    tag: "Flutter, Dart, PHP",
    des: [
      "Pour mon AP4, j'ai développé une application mobile cross-platform en utilisant Flutter et Dart, accompagnée d'un backend en PHP.",
      "Cette application permet aux utilisateurs de consulter et gérer leurs informations depuis leur smartphone, offrant une expérience utilisateur fluide et intuitive sur iOS et Android.",
      "Le projet met en œuvre les principes du développement mobile moderne avec une architecture robuste, une interface utilisateur responsive et une gestion efficace des données."
    ],
    extraImages: ["assets/img/news/ap4 logo.png"],
    githubLink: "https://github.com/Waayne78/ap4.git",
    docLinks: [
      "https://drive.google.com/file/d/1_O7ho3KL3XaGYwxVn25eoQjC6wVShArY/view?usp=sharing",
      "https://drive.google.com/file/d/1yLOHz6kyNX5WmsQXSnOy0i3Le6u0vARd/view?usp=sharing"
    ],
  },
  {
    title: "Bibliotheque app design and development",
    img: "assets/img/news/8.jpg",
    tag: "Php, Javascript, HTML, CSS",
    des: [
      "J'ai développé avec un partenaire une application de gestion de bibliothèque intégrant l'API Google Books pour afficher des livres en fonction du genre ou du titre saisi par l'utilisateur. J'ai mis en place un système d'inscription et de connexion sécurisé avec chiffrement des mots de passe.",
      "Les utilisateurs peuvent ajouter des livres à leur bibliothèque personnelle, enregistrant automatiquement les détails dans la base de données. Ils peuvent également gérer leur bibliothèque (ajout, visualisation, suppression de livres) et mettre à jour leurs informations personnelles à tout moment.",
    ],
    extraImages: ["assets/img/news/17.jpg"],
    githubLink: "",
  },
  {
    title: "GLPI",
    img: "assets/img/news/21.jpeg",
    tag: "Gestion de Parc Informatique",
    des: [
      "GLPI (Gestionnaire Libre de Parc Informatique) est un outil open-source de gestion des services informatiques (ITSM) et de gestion des actifs. Il permet de suivre efficacement les équipements, de gérer les tickets d'incidents, de planifier les interventions, et d'optimiser la gestion des ressources informatiques. Son interface modulable et ses fonctionnalités, comme la gestion des utilisateurs, des contrats, et des inventaires, en font une solution complète pour améliorer la productivité et centraliser les informations.",

    ],
    extraImages: ["assets/img/news/21.jpeg"],
    btsLink: "https://drive.google.com/file/d/10DeFiz6JG0paZXFYuJg2SdT--J4VQHUy/view?usp=sharing",
    githubLink: "",
  },
  {
    title: "BlueGen - IA SOCOTEC",
    img: "assets/img/news/bluegen_logo.jpg",
    tag: "Intelligence Artificielle, TensorFlow/PyTorch",
    des: [
      "J'ai grandement participé au développement de BlueGen, la nouvelle intelligence artificielle de SOCOTEC. Ce projet innovant vise à accompagner les collaborateurs dans leurs tâches quotidiennes grâce à une interface intuitive et des fonctionnalités avancées d'IA.",
      "J'ai contribué à la conception, au développement et à l'intégration de l'IA, ainsi qu'à la rédaction de la documentation technique et fonctionnelle.",
      "BlueGen est accessible à tous les collaborateurs via une plateforme web sécurisée."
    ],
    extraImages: ["assets/img/news/bluegen_logo.jpg"],
    accessLink: "https://bluegen.socotec.com/",
    docLinks: [
      "https://drive.google.com/file/d/1nq0Y3Xo1NRAbx4PdHRsJEkUN8B4FRz3l/view?usp=sharing",
      "https://drive.google.com/file/d/1gVS_6XIDE9pH4tHftzLhYGgPnr0P3FFS/view?usp=sharing"
    ],
  },
  {
    title: "Scripts PowerShell SOCOTEC (pwhsoco)",
    img: "assets/img/news/Socotec.png",
    tag: "PowerShell, Active Directory, Automatisation",
    des: [
      "Ce projet regroupe plusieurs scripts PowerShell développés pour automatiser la gestion des utilisateurs et des licences au sein de SOCOTEC. L'accès aux scripts est protégé par mot de passe.",
      "- ResetMDPWD.ps1 : Réinitialisation automatisée des mots de passe pour les nouveaux arrivants à partir d'un fichier Excel SharePoint, génération de mot de passe, journalisation et gestion sécurisée.",
      "- Export-Excel-Users.ps1 : Nettoyage, vérification et enrichissement d'un fichier Excel d'utilisateurs en interrogeant l'Active Directory, gestion des doublons, mise à jour des statuts et licences, et export du résultat.",
      "- Donnees-Users.ps1 : Vérification détaillée d'un utilisateur dans l'Active Directory, affichage des informations, groupes, avertissements et recommandations.",
      "- Set-ADUserM365Licence.ps1 : Modification automatisée de la licence M365 d'un utilisateur dans l'Active Directory (remplacement P1 par E1)."
    ],
    extraImages: ["assets/img/news/Socotec.png"],
    scriptLinks: [
      { name: "ResetMDPWD - Documentation", path: "https://docs.google.com/document/d/1EsYvTnkUeOvNJjfH2kPNgC7BT84rlJ_M/edit?usp=sharing&ouid=105758782550279000898&rtpof=true&sd=true" },
      { name: "Export-Excel-Users - Documentation", path: "https://docs.google.com/document/d/1fLU0eJbskfwjuaYZThomTgXujvaOR-OJ/edit?usp=sharing&ouid=105758782550279000898&rtpof=true&sd=true" },
      { name: "Donnees-Users - Documentation", path: "https://docs.google.com/document/d/1BxGFPLrleTLrdbD9qbZlSR7qezkWJSWf/edit?usp=sharing&ouid=105758782550279000898&rtpof=true&sd=true" },
      { name: "Set-ADUserM365Licence - Documentation", path: "https://docs.google.com/document/d/1dv9s2JSw7E5U7M_a1_Rz6Xpx46oqGRtv/edit?usp=sharing&ouid=105758782550279000898&rtpof=true&sd=true" }
    ],
    passwordProtected: true
  },
];

const News = () => {
  const { showNewsPopup } = useContext(context);

  const onClick = (index) => {
    showNewsPopup(data[index]);
  };

  return (
    <Fragment>
      <div className="edrea_tm_section" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section w-full h-auto clear-both float-left">
            <div className="edrea_tm_main_title">
              <h3>
                Mes <span className="text-pink-color">Projets</span>
              </h3>
            </div>
            <div className="news_list w-full h-auto clear-both float-left relative">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                        <div className="image relative overflow-hidden">
                          <img
                            className="relative opacity-0 min-w-full"
                            src="assets/img/thumbs/4-3.jpg"
                            alt=""
                          />
                          <div
                            className="main absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                            style={{
                              backgroundImage: `url(${news.img})`,
                            }}
                          ></div>
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          ></a>
                        </div>
                        <div className="details w-full float-left bg-[#222] pt-[30px] pr-[20px] pb-[27px] pl-[20px]">
                          <h3 className="text-[15px] mb-[4px]">
                            <a
                              className="no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                              href="#"
                              onClick={() => onClick(i)}
                            >
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a
                              className="no-underline text-main-color text-[14px] transition-all duration-300 hover:text-white-color"
                              href="#"
                              onClick={() => onClick(i)}
                            >
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
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
    </Fragment>
  );
};

export default News;
