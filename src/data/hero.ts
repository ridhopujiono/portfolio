import { profile } from './profile';

interface HeroData {
  eyebrow: string;
  greeting: string;
  name: string;
  supportingHeadline: string;
  description: string;
  primaryCta: { label: string; target: string };
  cvLabel: string;
  visualLabels: { backend: string; web: string; mobile: string };
}

export const hero: HeroData = {
  eyebrow: `${profile.role.toUpperCase()} · TUBAN, INDONESIA`,
  greeting: 'Hi, I’m',
  name: profile.name,
  supportingHeadline: 'Building web and mobile systems for everyday operations.',
  description:
    'I work across Laravel backends, React interfaces, and React Native apps, with experience in field management, offline workflows, and data synchronisation.',
  primaryCta: { label: 'View my work', target: '#projects' },
  cvLabel: 'Download CV',
  visualLabels: { backend: 'Backend', web: 'Web', mobile: 'Mobile' },
};
