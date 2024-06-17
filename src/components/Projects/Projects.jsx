import "./Projects.css";
import IMG1 from "../../assets/divinify.png";
import IMG2 from "../../assets/eletromart.png";
import IMG3 from "../../assets/tripfly.png";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      
    
      id: 1,
      title: "Divinify Website",
      img: IMG1,
      description:
        "Divinify agency will help you grow from the harsh elements of the world to establish your online presence.",
      // technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://www.divinify.in/",
      github: "",
    },
    {
      id: 2,
      title: "ElectroMart Website",
      img: IMG2,
      description:
        "To develop a dynamic and responsive e-commerce website that offers customers an extensive range of high-quality electronic products.",
      // technologies: "Html | Styled-components | Typescript",
      link: "",
      github: "",
    },
    {
      id: 3,
      title: "Travel Website",
      img: IMG3,
      description:
        "To develop a dynamic and responsive travel website that offers customers an travel new places.",
      // technologies: "Html | Scss | Javascript",
      link: "https://tripfly-in.vercel.app/home",
      github: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
