import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../../context/context";
import { testimonialSlider } from "../../sliderProps";
// import { testimonialSlider } from "../../sliderProps";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutPopup = () => {
  const { showAboutPopup, aboutPopup, color } = useContext(context);

  const aboutData = {
    firstName: "Kahil",
    lastName: "Mokhtari",
    bithday: "20.09.2005",
    address: "102 Square Auguste Renoir, 78190 Trappes, France",
    phn: "+33646130852",
    email: "kahil.mokhtari@gmail.com",
    serviceLists: [
      "Website Development",
      "Digital Experience",
      "Content Marketing",
      "Social Media Design",
      "Shared Web Hosting",
    ],
    skills: {
      programming: [
        { name: "WordPress", value: "95" },
        { name: "JavaScript", value: "80" },
        { name: "Angular", value: "90" },
      ],
      language: [
        { name: "Français", value: "95" },
        { name: "Arabic", value: "90" },
        { name: "Anglais", value: "60" },
      ],
    },
    education: [
      {
        year: "2016 - 2020",
        unv: "Oxford Univercity",
        degree: "Master Degree",
      },
      {
        year: "2010 - 2014",
        unv: "Texas Univercity",
        degree: "Bachelor Degree",
      },
      {
        year: "2016 - 2020",
        unv: "Collège Gustave Courbet,",
        degree: "Brevet des Collèges",
      },
    ],
    working: [
      {
        year: "2018 - running",
        company: "Envato Elements",
        deg: "Exclusive Author",
      },
      {
        year: "2015 - 2018",
        company: "Avo Corporation",
        deg: "Content Manager",
      },
      { year: "2012 - 2015", company: "FC Barcelona", deg: "Football Player" },
    ],
    partnersLogos: [
      "img/partners/1.png",
      "img/partners/2.png",
      "img/partners/3.png",
      "img/partners/4.png",
    ],
  };
  console.log(color);
  return (
    <Modal open={aboutPopup} close={showAboutPopup}>
      <div className="about_popup_details w-full h-full clear-both float-left relative">
        <div className="left fixed w-[40%] left-0 top-0 bottom-0 border-dashed border-[rgba(255,255,255,.1)] border-r z-[5]">
          <div className="left_inner w-full h-auto clear-both float-left relative px-[40px] py-[50px]">
            <div className="author w-full float-left mb-[35px] text-center overflow-hidden">
              <div className="avatar_image relative mt-0 mx-auto mb-[25px] max-w-[50%]">
                <img
                  className="relative opacity-0 min-w-full"
                  src="assets/img/thumbs/1-1.jpg"
                  alt=""
                />
                <div
                  className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                  data-img-url="assets/img/about/1.jpg"
                  style={{ backgroundImage: 'url("assets/img/about/1.jpg")' }}
                />
              </div>
              <div className="short w-full float-left">
                <h3 className="name text-[22px] uppercase mb-[7px]">
                  Kahil <span className="text-pink-color">Mokhtari</span>
                </h3>
                <h3 className="job font-normal text-main-color text-[15px]">
                  <AnimatedText />
                </h3>
              </div>
              
            </div>
            <div className="social_buttons w-full float-left mb-[35px] flex justify-center gap-4">
              <a
                href="https://github.com/Hakkai19z"
                target="_blank"
                rel="noopener noreferrer"
                className="social_btn flex items-center gap-2 bg-[#222] hover:bg-pink-color px-6 py-3 rounded-[50px] text-white-color transition-all duration-300"
                style={{
                  border: `2px solid ${color}`,
                  boxShadow: `0 0 10px ${color}40`
                }}
              >
                <FaGithub className="text-xl" />
                
              </a>
              <a
                href="https://www.linkedin.com/in/kahil-mokhtari-55aa582aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="social_btn flex items-center gap-2 bg-[#222] hover:bg-pink-color px-6 py-3 rounded-[50px] text-white-color transition-all duration-300"
                style={{
                  border: `2px solid ${color}`,
                  boxShadow: `0 0 10px ${color}40`
                }}
              >
                <FaLinkedin className="text-xl" />
                
              </a>
            </div>
            <div className="list w-full float-left mb-[35px]">
              <ul className="m-0 list-none">
                <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-user text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">Kahil Mokhtari</span>
                  </div>
                </li>
                <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-calendar text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">20.09.2005</span>
                  </div>
                </li>
                <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-location text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">
                      <a
                        href="#"
                        className="href_location no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        Trappes, France
                      </a>
                    </span>
                  </div>
                </li>
                <li className="w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-phone text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">
                      <a
                        className="no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                        href="#"
                      >
                        +33646130852
                      </a>
                    </span>
                  </div>
                </li>
                <li className="w-full float-left">
                  <div className="list_inner m-0 w-full float-left relative">
                    <i className="icon-mail-1 text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]" />
                    <span className="pl-[37px]">
                      <a
                        className="no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                        href="mailto:kahil.mokhtari@gmail.com"
                      >
                        kahil.mokhtari@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="cv-button-container">
              <a href="assets/img/about/CV de Mokhtari Kahil Airbus (1).pdf" download=""
                 className="block w-full text-center py-3 px-6 bg-[#222] hover:bg-pink-color rounded-[50px] text-white-color transition-all duration-300"
                 style={{
                   border: `2px solid ${color}`,
                   boxShadow: `0 0 10px ${color}40`
                 }}
              >
                Mon CV
              </a>
            </div>
          </div>
        </div>
        <div className="right w-full absolute pl-[40%] top-0 right-0 bottom-0">
          <div className="right_inner w-full h-auto clear-both float-left relative px-[40px] py-[50px]">
            <div className="biography w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    A propos de <span className="text-pink-color">moi</span>
                  </span>
                </h3>
              </div>
              <div className="text mt-[29px] float-left">
                <p>
                  Je suis un alternant chez Socotec et étudiant à l'IPSSI de
                  Saint-Quentin-en-Yvelines. Passionné par le développement web,
                  je suis investi dans mon travail et ma formation pour acquérir
                  les compétences essentielles et exceller dans ce domaine.
                </p>
              </div>
            </div>
            <div className="service w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Mes <span className="text-pink-color">Qualités</span>
                  </span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[20px]">
                <ul className="m-0 list-none">
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Déterminé
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Studieux
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Rigoureux
                  </li>
                  <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Pointilleux
                  </li>
                  <li className="w-full float-left relative pl-[25px]">
                    <i className="icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]" />
                    Aisance à l'oral
                  </li>
                </ul>
              </div>
            </div>
            <div className="prog_skill w-full float-left mb-[62px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Compétences en{" "}
                    <span className="text-pink-color">programmation</span>
                  </span>
                </h3>
              </div>
              <div className="oki_progress">
                <div className="progress_inner" data-value={95}>
                  <span>
                    <span className="label">HTML5/CSS3</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">JavaScript</span>
                    <span className="number">60%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "60%" }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">PHP</span>
                    <span className="number">60%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "60%" }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">ReactJS</span>
                    <span className="number">50%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "50%" }} />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={80}>
                  <span>
                    <span className="label">Tallwind CSS</span>
                    <span className="number">50%</span>
                  </span>
                  <div className="background">
                    <div className="bar open">
                      <div className="bar_in" style={{ width: "50%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lang_skill w-full float-left mb-[34px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Mes <span className="text-pink-color">Langue</span>
                  </span>
                </h3>
              </div>
              <div className="circular_progress_bar w-full h-auto clear-both float-left mt-[40px]">
                <ul className="ml-[-20px]">
                  {aboutData.skills &&
                    aboutData.skills.language &&
                    aboutData.skills.language.map((language, i) => (
                      <li
                        key={i}
                        className="mb-[20px] w-1/3 float-left pl-[20px]"
                      >
                        <div className="list_inner w-full relative text-center">
                          <div
                            className="myCircle relative float-left"
                            data-value="0.95"
                          >
                            <CircularProgressbar
                              value={language.value}
                              text={`${language.value}%`}
                              strokeWidth={2}
                              styles={buildStyles({
                                // Colors
                                pathColor: color,
                              })}
                            />
                          </div>
                          <div className="title w-full max-w-[110px] text-center">
                            <span>{language.name}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  {/* <li className="mb-[20px] w-1/3 float-left pl-[20px]">
                    <div className="list_inner w-full relative text-center">
                      <div
                        className="myCircle relative float-left"
                        data-value="0.95"
                      >
                        <canvas width={110} height={110} />
                        <span className="number">95%</span>
                      </div>
                      <div className="title w-full max-w-[110px] text-center">
                        <span className="inline-block mt-[5px]">English</span>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="timeline w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Parcours <span className="text-pink-color">Scolaire</span>
                  </span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[45px]">
                <ul className="m-0 list-none relative inline-block pt-[10px]">
                  <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2023 - Présent
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">Ecole IPSSI</h3>
                        <span className="text-[14px]">BTS SIO SLAM</span>
                      </div>
                    </div>
                  </li>
                  <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2021 - 2023
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">
                          Lycée Emilie de Breteuil
                        </h3>
                        <span className="text-[14px]">
                          Baccalauréat général
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="m-0 w-full float-left relative pl-[20px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2016 - 2020
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">
                          Collège Gustave Courbet
                        </h3>
                        <span className="text-[14px]">Brevet des Collèges</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline w-full float-left mb-[55px]">
              <div className="about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]">
                <h3 className="text-[18px] font-semibold">
                  <span className="text-white-color">
                    Expériences{" "}
                    <span className="text-pink-color">Professionel</span>
                  </span>
                </h3>
              </div>
              <div className="list w-full h-auto clear-both float-left mt-[45px]">
                <ul className="m-0 list-none relative inline-block pt-[10px]">
                  <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2024 - Présent
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">Socotec</h3>
                        <span className="text-[14px]">Alternance</span>
                      </div>
                    </div>
                  </li>
                  <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2020 - 2023
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">
                          Animateur en centre de loisirs
                        </h3>
                        <span className="text-[14px]">BAFA</span>
                      </div>
                    </div>
                  </li>
                  <li className="m-0 w-full float-left relative pl-[20px]">
                    <div className="list_inner w-full h-auto clear-both flex relative">
                      <div className="time w-1/2 pr-[15px]">
                        <span className="inline-block px-[25px] py-[5px] bg-[rgba(255,255,255,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          2020
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[15px]">
                        <h3 className="text-[15px] mb-[2px]">Thalès Group</h3>
                        <span className="text-[14px]">Stage d'observation</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
