import { Fragment, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { newsSlider } from "../sliderProps";

const data = [
  {
    title: "Wetther app design and development",
    img: "assets/img/news/14.jpg",
    tag: "Javascript",
    des: [
      "Cette application de météo, développée en utilisant JavaScript, offre aux utilisateurs une expérience simple et intuitive pour obtenir des prévisions météorologiques.",
      "Elle propose deux options distinctes pour accéder aux informations. La première option utilise la localisation actuelle de l'utilisateur, détectée automatiquement, pour fournir des prévisions précises et en temps réel.",
      "Cette fonctionnalité est idéale pour ceux qui souhaitent connaître rapidement la météo locale sans aucune saisie supplémentaire.",
      "La deuxième option permet aux utilisateurs d'entrer manuellement le nom d'une ville dans un champ de saisie, offrant ainsi la possibilité de consulter les conditions météorologiques de n'importe quelle ville dans le monde.",
      "Grâce à cette double approche, l'application se distingue par sa flexibilité et son utilité, répondant efficacement aux divers besoins des utilisateurs.",
    ],
    extraImages: ["assets/img/news/16.jpg"],
  },
  {
    title: "Shifumi game design and development",
    img: "assets/img/news/7.jpg",
    tag: "Javascript",
    des: [
      "J'ai développé un jeu de Shifoumi en JavaScript où le joueur peut jouer contre l'ordinateur. Le jeu offre au joueur la possibilité de choisir entre pierre, papier ou ciseaux, et l'ordinateur fait également un choix aléatoire parmi ces options.",
      "Le programme détermine ensuite le gagnant en comparant les choix du joueur et de l'ordinateur selon les règles classiques du Shifoumi. Ce projet est une excellente démonstration de l'utilisation de JavaScript pour créer des interactions dynamiques et amusantes sur une page web.",
    ],
    extraImages: ["assets/img/news/2.jpg"],
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

  },
  {
    title: "Space Odyssey design and development",
    img: "assets/img/news/10.jpg",
    tag: "Php, Javascript, HTML, CSS",
    des: [
      "Pour mon premier projet (AP1), j'ai créé un site nommé Space Odyssey, qui propose un service innovant de réservation de vols et d’hôtels dans l’espace. J'ai imaginé l'identité de l'entreprise, conçu un logo, élaboré une charte graphique et trouvé un slogan accrocheur.",
      "J'ai également décrit les produits et services, précisé le statut juridique fictif, et analysé la concurrence. Le site a été développé en HTML, CSS et JavaScript, avec un travail sur le référencement pour optimiser sa visibilité sur les moteurs de recherche et LinkedIn.",
    ],
    extraImages: ["assets/img/news/15.jpg"],
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
  },
  {
    title: "ESHOP app design and development",
    img: "assets/img/news/9.jpg",
    tag: "Php, Javascript, HTML, CSS",
    des: [
      "J'ai développé une application E-shop en PHP, exploitant une API pour gérer efficacement les produits et les commandes. Ce projet m'a permis de mettre en pratique des compétences avancées en développement web, notamment : ",

      "- Back-end : Conception et implémentation d'une architecture robuste en PHP pour assurer un traitement fluide des données. ",
      "- API : Intégration d'une API permettant des actions comme l'ajout, la modification et la suppression des produits, ainsi que la gestion des commandes clients. ",
      "- Front-end : Création d'une interface utilisateur intuitive et responsive pour offrir une expérience d'achat optimale. ",
      "- Gestion des données : Mise en place d'une base de données structurée pour le stockage sécurisé des informations sur les produits et les commandes. ",
      "- Performance et sécurité : Optimisation des performances de l'application et ajout de mesures pour garantir la sécurité des transactions et des données.  ",

      "Ce projet représente un pas important dans ma formation en développement web, consolidant ma maîtrise des outils et méthodologies nécessaires à la création d'applications e-commerce modernes. ",
    ],
  },
  {
    title: "Site vitrine design and development",
    img: "assets/img/news/13.jpg",
    tag: "HTML, CSS",
    des: [],
    extraImages: ["assets/img/news/18.jpg"],

  },
  {
    title: "Food API design and development",
    img: "assets/img/news/11.jpg",
    tag: "PHP, Javascript",
    des: [
      "J'ai développé une application exploitant une **Food API** pour gérer et afficher des données alimentaires. Ce projet m'a permis de renforcer mes compétences en développement web, notamment :  ",

      "- Back-end : Utilisation de PHP pour interagir avec la Food API et traiter les données reçues. ",
      "- API : Intégration d'une API permettant des recherches avancées, des filtres par catégorie ou ingrédient, et l'affichage d'informations détaillées sur les recettes ou les produits alimentaires. ",
      "- Front-end : Développement d'une interface utilisateur responsive, facilitant la navigation et la recherche pour offrir une expérience fluide. ",
      "- Gestion des données : Analyse et affichage des informations reçues de l'API, avec une structuration claire et accessible. ",
      "- Performance et expérience utilisateur : Optimisation de la vitesse de chargement et mise en œuvre de fonctionnalités interactives pour améliorer l'expérience globale. ",

      "Ce projet a été une excellente opportunité de travailler avec une API orientée données complexes, tout en développant des solutions concrètes pour les utilisateurs intéressés par la cuisine et la nutrition. ",
    ],
    extraImages: ["assets/img/news/19.jpg"],

  },
  {
    title: "Lord of battles design and development",
    img: "assets/img/news/12.jpg",
    tag: "PHP, Javascript",
    des: [
      "J'ai développé une application de jeu de combat stratégique, exploitant une Game Engine API pour gérer les affrontements et les statistiques des personnages de Game of Thrones. Ce projet m'a permis de renforcer mes compétences en développement de jeux, notamment : ",

      " Back-end : Utilisation de C# pour gérer la logique de combat, les systèmes de score et la progression des joueurs, avec une architecture permettant des calculs complexes de dégâts et d'effets spéciaux. ",
      " API : Intégration d'une API de combat permettant la gestion des affrontements en temps réel, un système de classement, et l'accès aux statistiques détaillées des personnages, leurs équipements et leurs compétences. ",
      " Front-end : Développement d'une interface de combat dynamique avec des animations fluides, des effets visuels impressionnants et un système de contrôle intuitif adapté aussi bien au PC qu'aux appareils mobiles. ",
      " Gestion des données : Implémentation d'un système robuste pour suivre l'évolution des personnages, leurs équipements, leurs victoires et défaites, ainsi que leur progression dans les différents modes de jeu. ",
      " Performance et expérience utilisateur : Optimisation des animations de combat, réduction des temps de chargement et mise en place d'un système de matchmaking équilibré pour garantir des affrontements équitables et passionnants. ",

      " Ce projet a été une excellente opportunité de créer un jeu de combat stratégique complet, alliant des mécaniques de jeu complexes à une expérience utilisateur immersive et accessible pour tous les types de joueurs, du débutant au plus expérimenté. ",
    ],
    extraImages: ["assets/img/news/20.jpg"],
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
