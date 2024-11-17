import React, { useEffect, useState } from "react";
import "animate.css/animate.min.css";
import { PiHandshakeDuotone } from "react-icons/pi";
import { TbMessageHeart } from "react-icons/tb";
import InputField from "../Layers/InputField";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div
      className={`bg-[#171717] rounded-bl-[10px] rounded-br-[10px] md:rounded-bl-[14px] md:rounded-br-[14px] pb-5 min-h-dvh ${
        isLoaded ? "animate__animated animate__fadeIn" : ""
      }`}
    >
      <section id="contact" className="pt-12 md:px-5 px-2">
        <div className="main flex md:flex-row flex-col gap-y-10 md:items-center md:justify-center">
          <div className="left md:w-1/2 text-white">
            <p className="md:text-[90px] text-5xl leading-[120%] font-Outfit font-medium">
              Let's <span className="text-[#FCD980]">chat</span>.
            </p>
            <p className="md:text-[78px] text-4xl leading-[120%] font-Outfit font-medium">
              Tell me about your project.
            </p>
            <p className="text-base leading-[100%] md:mt-5 mt-3 font-Josefin md:text-xl flex items-center gap-2">
              Let's collaborate on something amazing!{" "}
              <PiHandshakeDuotone className="text-[#FCD980]" />
            </p>
          </div>
          <div className="left md:w-1/2">
            <div className="form md:py-9 md:px-10 py-4 px-5 bg-[#373738] rounded-tr-[14px] md:rounded-tr-[14px] md:rounded-tl-none rounded-tl-none md:rounded-bl-[14px] rounded-bl-[14px]">
              <h2 className="text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px] flex items-center justify-between md:mb-8 mb-4">
                Send me a message <TbMessageHeart className="text-[#FCD980]" />
              </h2>
              <div className="fields flex flex-col md:gap-y-9 gap-y-8">
                <InputField
                  label="Your Name"
                  name="name"
                  inputType="text"
                  req="*"
                />
                <InputField
                  label="Your Email"
                  name="email"
                  inputType="mail"
                  req="*"
                />
                <InputField
                  label="Subject of discussion"
                  name="name"
                  inputType="text"
                />
                <div className="comment flex flex-col md:gap-2 gap-[2px] text-white">
                  <label
                    htmlFor=""
                    className="md:text-xl font-Josefin font-bold"
                  >
                    Tell us more About your project <span className="text-[#FCD980]">*</span>
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder=""
                    className="bg-transparent border-b-2 border-[#dcca8756] outline-none text-base font-Outfit"
                  ></textarea>
                </div>
                <div className="btn flex items-center">
                  <button className="px-6 md:px-10 py-[6px] md:py-[10px] md:text-lg text-black font-Josefin font-bold bg-[#FCD980] rounded-tr-[10px] md:rounded-tr-[14px] md:rounded-tl-none rounded-tl-none md:rounded-bl-[14px] rounded-bl-[10px] border border-[#FCD980] duration-300 hover:text-white hover:bg-transparent tracking-wide">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* location */}
      <section id="map" className="md:pt-20 pt-12 md:px-5 px-2">
        <div className="main">
          <h2 className="text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px]">
            My base
          </h2>
          <div className="map md:mt-8 mt-5">
            <iframe
              className="md:w-[90%] w-full md:h-[300px] h-[200px] border-2 border-[#DCCA87]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.743024629267!2d91.18162426167557!3d23.469732155395373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f16933fe81d%3A0xb746198045f22275!2z4Kaq4KeN4Kaw4Kak4KeN4Kav4KefIOCmieCmqOCnjeCmqOCnn-CmqCDgprjgpoLgprjgp43gpqXgpr4!5e0!3m2!1sen!2sbd!4v1731744687563!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
