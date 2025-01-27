export interface IProject {
  id: number;
  translations: {
    es: {
      title: string;
      description: string;
    };
    en: {
      title: string;
      description: string;
    };
  };
  imageUrl: string;
  technologies: string[];
  link?: string;
  github?: string;
}
