import { IProject } from "@/interface/projects";

export const projects: IProject[] = [
  {
    id: 1,
    translations: {
      es: {
        title: "Serviclick",
        description: "Un conjunto de aplicaciones que se encargan de la venta y la promoción de asistencias (seguros)",
      },
      en: {
        title: "Serviclick",
        description: "A set of applications responsible for the sale and promotion of insurance services",
      },
    },
    imageUrl: "/projects/serviclick.png",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Express", "Mercadopago"],
    github: "https://github.com/valencaceres/serviclick",
    link: "https://www.serviclick.cl/",
  },
  {
    id: 2,
    translations: {
      es: {
        title: "El parrón",
        description: "Un sistema de aplicaciones creado para la empresa y franquicia de pasteles El Parrón. (Solo es posible entrar desde Chile)",
      },
      en: {
        title: "El Parrón",
        description: "A system of applications created for the company and pastry franchise El Parrón. (Accessible only from Chile)",
      },
    },
    imageUrl: "/projects/elparron.png",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Express"],
    link: "https://www.pasteleriaelparron.cl/",
  },
    {
      id: 3,
      translations: {
        es: {
          title: "LaikiClub",
          description: "Aplicacion web de venta de seguros para productos electronicos",
        },
        en: {
          title: "LaikiClub",
          description: "Web application for selling insurance for electronic products",
        },
      },
      imageUrl: "/projects/laikiclub.png",
      technologies: ["Next.js",  "TypeScript", "Node.js", "PostgreSQL", "Express"],
    },
    {
      id: 4,
      translations: {
        es: {
          title: "Portal-Firma",
          description: "Conjunto de aplicaciones que se encargan de la firma de contratos para administrar documentos online",
        },
        en: {
          title: "LaikiClub",
          description: "A set of applications responsible for contract signing to manage documents online.",
        },
      },
      imageUrl: "/projects/portalfirma.png",
      technologies: ["Next.js",  "TypeScript", "Node.js", "PostgreSQL", "Express"],
      link: "https://www.portalfirma.cl/"
    },
    {
      id: 5,
      translations: {
        es: {
          title: "Westay",
          description: "Sitio web encargado de la venta de propiedades inmuebles",
        },
        en: {
          title: "Westay",
          description: "Website dedicated to the sale of real estate properties.",
        },
      },
      imageUrl: "/projects/westay.png",
      technologies: ["Next.js",  "TypeScript", "Node.js", "PostgreSQL", "Express"],
      link: "https://www.westayrent.com/"
    }
  ];