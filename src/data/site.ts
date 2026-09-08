export interface SiteData {
  name: string;
  description: string;
  language: 'en';
  url: string | null;
  socialLinks: {
    github: string | null;
    linkedin: string | null;
    instagram: string | null;
    threads: string | null;
  };
  contactEmail: string | null;
  whatsappNumber: string | null;
  cvPath: string | null;
}

export const site: SiteData = {
  name: 'Ridho Pujiono',
  description: 'Software engineer working across backend, web, and mobile.',
  language: 'en',
  url: null,
  socialLinks: {
    github: 'https://github.com/ridhopujiono',
    linkedin: 'https://www.linkedin.com/in/ridho-pujiono/',
    instagram: 'https://instagram.com/ridhopujiono_',
    threads: 'https://www.threads.com/@ridhopujiono_',
  },
  contactEmail: 'ridhopujiono.work@gmail.com',
  whatsappNumber: '6282257802227',
  cvPath: null,
};
