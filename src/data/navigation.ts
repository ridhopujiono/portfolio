import { withBase } from '../lib/urls';
import { site } from './site';

export const homeHref = withBase('');

export const hasContactChannels = Boolean(
  site.contactEmail || site.socialLinks.github || site.socialLinks.linkedin || site.whatsappNumber
);

export const navigation = [
  { label: 'Home', href: homeHref },
  { label: 'About', href: withBase('#about') },
  { label: 'Experience', href: withBase('#experience') },
  { label: 'Projects', href: withBase('/projects/') },
  ...(hasContactChannels ? [{ label: 'Contact', href: withBase('#contact') }] : []),
] as const;
