export interface SiteData {
  name: string;
  description: string;
  language: 'en';
  url: string | null;
  socialLinks: {
    github: string | null;
    linkedin: string | null;
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
    github: null,
    linkedin: null,
  },
  contactEmail: null,
  whatsappNumber: null,
  cvPath: null,
};
