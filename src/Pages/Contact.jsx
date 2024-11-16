import React, { useEffect, useState } from "react";
import "animate.css/animate.min.css";

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
        <div className="main flex items-center justify-center">
          <div className="left py-20 bg-slate-700 w-1/2 text-white">
            <p>Let's talk</p>
            <p>Tell me about your project</p>
          </div>
          <div className="left py-20 bg-slate-500 w-1/2">2</div>
        </div>
      </section>

      {/* location */}
      <section id="map" className="md:pt-20 pt-12 md:px-5 px-2">
        <div className="main">
          <h2 className="text-2xl md:text-4xl text-[#FFF] font-Josefin font-bold md:font-semibold tracking-[0.55px]">
            My base
          </h2>
          <div className="map md:mt-8 mt-5">
          <iframe className="md:w-[90%] w-full md:h-[300px] h-[200px] border-2 border-[#DCCA87]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.743024629267!2d91.18162426167557!3d23.469732155395373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f16933fe81d%3A0xb746198045f22275!2z4Kaq4KeN4Kaw4Kak4KeN4Kav4KefIOCmieCmqOCnjeCmqOCnn-CmqCDgprjgpoLgprjgp43gpqXgpr4!5e0!3m2!1sen!2sbd!4v1731744687563!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
