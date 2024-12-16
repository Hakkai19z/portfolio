import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzblblr");

  return (
    <div className="edrea_tm_section" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact w-full h-auto clear-both float-left">
          <div className="edrea_tm_main_title">
            <h3>
              Contactez <span className="text-pink-color">Moi</span>
            </h3>
          </div>
          <div className="wrapper w-full h-auto clear-both float-left flex pt-[60px]">
            <div className="left w-1/2 pr-[50px]">
              <ul className="m-0 list-none">
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-location text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <a
                        href="#"
                        className="href_location text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        Trappes, France
                      </a>
                    </span>
                  </div>
                </li>
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-phone text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <a
                        href="#"
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        +33646130852
                      </a>
                    </span>
                  </div>
                </li>
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-mail-1 text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <a
                        href="mailto:example@gmail.com"
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        Kahil.mokhtari@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right w-1/2 pl-[50px]">
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  onSubmit={handleSubmit}
                  className="contact_form"
                >
                  {state.succeeded ? (
                    <div className="success_message text-center p-4 bg-[#222] rounded-[10px] text-white-color mb-[20px]">
                      Votre message a été envoyé avec succès!
                    </div>
                  ) : null}
                  
                  <div className="first w-full float-left mb-[20px]">
                    <ul className="ml-[-20px] list-none">
                      <li className="m-0 w-1/2 pl-[20px] float-left">
                        <div className="list_inner w-full h-auto clear-both float-left bg-[#222] rounded-[10px]">
                          <input
                            className="w-full h-[45px] bg-transparent border-none text-main-color p-[20px] font-poppins"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Nom"
                            autoComplete="off"
                          />
                          <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                            className="text-pink-color text-sm mt-1 ml-[20px]"
                          />
                        </div>
                      </li>
                      <li className="m-0 w-1/2 pl-[20px] float-left">
                        <div className="list_inner w-full h-auto clear-both float-left bg-[#222] rounded-[10px]">
                          <input
                            className="w-full h-[45px] bg-transparent border-none text-main-color p-[20px] font-poppins"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            className="text-pink-color text-sm mt-1 ml-[20px]"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last w-full float-left bg-[#222] rounded-[10px] mb-[20px]">
                    <textarea
                      className="w-full h-[108px] bg-transparent border-none text-main-color resize-none p-[20px] font-poppins"
                      id="message"
                      name="message"
                      placeholder="Message"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-pink-color text-sm mt-1 ml-[20px]"
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      className="text-white-color inline-block bg-pink-color px-[40px] py-[10px] text-center rounded-[50px] font-poppins transition-all duration-300 hover:bg-white-color hover:text-black w-full"
                    >
                      {state.submitting ? 'Envoi en cours...' : 'Envoyez votre Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
