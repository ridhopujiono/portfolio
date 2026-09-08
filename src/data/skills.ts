export interface SkillGroup {
  name: string;
  items: string[];
  context: string;
}

export const skillsHeading = "Tools I use to build and maintain systems.";

export const skills: SkillGroup[] = [
  { 
    name: 'Backend', 
    items: ['PHP', 'Laravel', 'MySQL'],
    context: 'APIs, business rules, data modelling, reporting, and scheduled jobs.'
  },
  { 
    name: 'Web', 
    items: ['JavaScript', 'TypeScript', 'React', 'Mantine'],
    context: 'Operational interfaces, forms, data tables, and access-aware workflows.'
  },
  { 
    name: 'Mobile', 
    items: ['React Native', 'SQLite'],
    context: 'Field data entry, local persistence, and offline synchronisation.'
  },
  {
    name: 'Cross-platform workflows',
    items: ['API integration', 'Background processing', 'Data synchronisation', 'Import and export'],
    context: 'Connecting backend services with web and mobile workflows.'
  },
];

