import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbHandClick } from "react-icons/tb";

const Project = ({ ProjectTitle, tag, src, href }) => {
  return (
    <>
      <div className="box rounded-[10px] md:w-[350px] w-[170px] md:rounded-[14px] bg-[#262627] group overflow-hidden">
        <a href={href} target="_blank">
          <div className="img md:w-[350px] md:h-[350px] w-[170px] h-[170px] relative cursor-pointer">
            <img
              src={src}
              alt=""
              className="w-full h-full rounded-tl-[10px] rounded-tr-[10px] md:rounded-tl-[14px] md:rounded-tr-[14px] object-cover object-top"
            />
            <div className="overlay absolute top-0 left-0 rounded-tl-[10px] rounded-tr-[10px] md:rounded-tl-[14px] md:rounded-tr-[14px] w-full h-0 flex justify-center items-center gap-2 text-[#DCCA87] text-xs md:text-xl font-Josefin font-bold bg-[#00000069] invisible transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:visible group-hover:w-full group-hover:h-full whitespace-nowrap">
              Click to preview Live <TbHandClick />
            </div>
          </div>
        </a>
        <div className="text p-2 md:p-4">
          <h2 className="md:text-2xl text-base text-[#F5F5F3] font-Josefin md:font-semibold font-medium leading-[130%] tracking-[0.34px] mt-2 md:mt-4">
            {ProjectTitle}
          </h2>
          <p className="md:text-sm text-xs text-[#d5d5d5] md:font-medium font-Outfit leading-[130%] tracking-[0.54px] mt-1">
            {tag}
          </p>
        </div>
      </div>
    </>
  );
};

const Portfolio = () => {
  let [activeTab, setActiveTab] = useState("all");

  const projectCards = [
    {
      id: 1,
      projectTitle: "OREBI",
      projectType: "Web Development",
      src: "/Projects/Web Developments/Orebi.jpg",
      liveLink: "https://mahmudul-orebi.netlify.app",
    },
    {
      id: 2,
      projectTitle: "Gericht",
      projectType: "Web Development",
      src: "/Projects/Web Developments/Gericht.jpg",
      liveLink: "https://restaurantonline-gericht.netlify.app",
    },
    {
      id: 3,
      projectTitle: "WebFlow Agency",
      projectType: "Web Design",
      src: "/Projects/Web Designs/Finsweet.png",
      liveLink: "https://www.figma.com/design/xnQ6DSvOkYcgkRBtbH0B07/Webflow-Agency)---Finsweet?node-id=0-1&m=dev",
    },
    {
      id: 4,
      projectTitle: "Fresh",
      projectType: "Web Development",
      src: "/Projects/Web Developments/F R E S H.png",
      liveLink: "https://example.com/web-design-two",
    },
    {
      id: 5,
      projectTitle: "Organic Store",
      projectType: "Web Design",
      src: "/Projects/Web Designs/Organic.png",
      liveLink: "https://www.figma.com/design/ypq1Re5ds8g3CzjkOEGbos/Organic-store-design?node-id=0-1&m=dev",
    },
    {
      id: 6,
      projectTitle: "Tech Store",
      projectType: "Web Development",
      src: "/Projects/Web Developments/Tech Store.png",
      liveLink: "https://tech-store-xi.vercel.app/",
    },
    {
      id: 7,
      projectTitle: "Orebi E-commerce",
      projectType: "Web Design",
      src: "/Projects/Web Designs/Orebi.jpg",
      liveLink: "https://www.figma.com/design/OrCQOOAEbAeufB43XMYWw0/Orebi-E-Commerce-site-design?node-id=0-1&m=dev",
    },
    {
      id: 8,
      projectTitle: "Tech store E-commerce",
      projectType: "Web Design",
      src: "/Projects/Web Designs/Tech.png",
      liveLink: "https://www.figma.com/design/NdqWBx6RU1mZeDrOkE65Kx/eCommerce-design---Tech-Store?node-id=212-23183&m=dev",
    },
    {
      id: 9,
      projectTitle: "Brand Store",
      projectType: "Web Design",
      src: "/Projects/Web Designs/Fresh.png",
      liveLink: "https://www.figma.com/design/W0tkTXFDUKSuKXQRnGh4eK/Fashion-website-design?node-id=0-1&m=dev",
    },
    {
      id: 10,
      projectTitle: "Landing page",
      projectType: "Web Design",
      src: "/Projects/Web Designs/Upland.png",
      liveLink: "https://www.figma.com/design/Htb7IDxCP9wDQUO0Hxc9Se/Upland---Mobile-App-Landing-Page?node-id=0-1&m=dev",
    },
    {
      id: 11,
      projectTitle: "Agency Landing page",
      projectType: "Web Development",
      src: "/Projects/Web Developments/Agency.png",
      liveLink: "https://marimo-103.github.io/agenC/",
    },
  ];

  const filteredProjects = projectCards.filter(
    (project) =>
      activeTab === "all" ||
      (activeTab === "design" && project.projectType === "Web Design") ||
      (activeTab === "dev" && project.projectType === "Web Development")
  );

  return (
    <div className="bg-[#171717] rounded-bl-[10px] rounded-br-[10px] md:rounded-bl-[14px] md:rounded-br-[14px] pb-5">
      <div className="crumbs flex gap-5 md:gap-12 items-center justify-start pt-12 md:px-5 px-2">
        <p
          onClick={() => setActiveTab("all")}
          className={`md:text-lg text-sm font-Josefin md:font-medium tracking-[0.45px] cursor-pointer ${
            activeTab === "all" ? "text-[#DCCA87]" : "text-[#F5F5F3]"
          }`}
        >
          All
        </p>
        <p
          onClick={() => setActiveTab("design")}
          className={`md:text-lg text-sm font-Josefin md:font-medium tracking-[0.45px] cursor-pointer ${
            activeTab === "design" ? "text-[#DCCA87]" : "text-[#F5F5F3]"
          }`}
        >
          Web Designs
        </p>
        <p
          onClick={() => setActiveTab("dev")}
          className={`md:text-lg text-sm font-Josefin md:font-medium tracking-[0.45px] cursor-pointer ${
            activeTab === "dev" ? "text-[#DCCA87]" : "text-[#F5F5F3]"
          }`}
        >
          Web Developments
        </p>
      </div>

      {/* all projects */}
      {activeTab === "all" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <section id="all" className="pt-12 md:px-5 px-2">
            <div className="main grid md:grid-cols-3 grid-cols-2 gap-y-6 md:gap-y-16 gap-x-6">
              {filteredProjects.map((item) => (
                <Project
                  key={item.id}
                  src={item.src}
                  ProjectTitle={item.projectTitle}
                  tag={item.projectType}
                  href={item.liveLink}
                />
              ))}
            </div>
          </section>
        </motion.div>
      )}

      {activeTab === "dev" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <section id="webDev" className="pt-12 md:px-5 px-2">
          <div className="main grid md:grid-cols-3 grid-cols-2 gap-y-6 md:gap-y-16 gap-x-6">
              {filteredProjects.map((item) => (
                <Project
                  key={item.id}
                  src={item.src}
                  ProjectTitle={item.projectTitle}
                  tag={item.projectType}
                  href={item.liveLink}
                />
              ))}
            </div>
          </section>
        </motion.div>
      )}

      {activeTab === "design" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <section id="webDesign" className="pt-12 md:px-5 px-2">
          <div className="main grid md:grid-cols-3 grid-cols-2 gap-y-6 md:gap-y-16 gap-x-6">
              {filteredProjects.map((item) => (
                <Project
                  key={item.id}
                  src={item.src}
                  ProjectTitle={item.projectTitle}
                  tag={item.projectType}
                  href={item.liveLink}
                />
              ))}
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;
