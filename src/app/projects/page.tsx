

import Image from "next/image";
import Link from "next/link";

const projects = [

  {
    src:"/project1.jpeg",
    alt:"Quiz app",
    title:"Quiz App",
    description:"A quiz app that allows users to answers the Quiz and win the task.",
    link:"https://github.com/khan786madiha/project08_Quiz"
  },
  {
    src: "/project2.jpg", // Direct URL from public folder
    alt: "Blog website",
    title: "Blog Website",
    description: "Dive into a world of insights and stories with our blog, where every post sparks inspiration and conversation.",
    link: "https://github.com/khan786madiha?page=2&tab=following"
  },
  {
    src: "/project3.jpg", // Direct URL from public folder
    alt: "World Tour",
    title: "Tour Website",
    description: "Embark on a global journey with our world tour website, showcasing breathtaking destinations and unforgettable experiences.",
    link: "https://world-tours-lime.vercel.app"
  },
  {
    src: "/project4.jpg", // Direct URL from public folder
    alt: "Adventure Game",
    title: "Adventure Game",
    description: "An immersive adventure game that takes players on an epic journey through mysterious realms, filled with challenges and discovery.",
    link: "https://github.com/khan786madiha/project07_adventure_game"
  },
  {
    src: "/ecommerce.jpeg",     // Direct URL from public folder
    alt: "E-commerce Website",
    title: "E-commerce Website",
    description: "A fully functional e-commerce website that allows users to browse and purchase products ",
    link: "https://github.com/khan786madiha/project09_ecommerce"
  }
];

const Project = () => {
  return (
    <section className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-white hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-pink-600 text-5xl hover:text-white">P</span>rojects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right" data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-gray-700 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src}  // URL path from public folder
                    alt={project.alt}
                    width={500}  // Set width
                    height={300} // Set height
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-gray-800 h-[220px]">
                  <Link href={project.link}>
                    <h1 className="text-2xl font-serif text-pink-600 hover:uppercase hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
