export interface ProjectContribution {
  title: string;
  description: string;
}

export interface ContributionPeriod {
  label: string;
  period: string;
}

export interface ExperienceData {
  company: string;
  role: string;
  scopeLabel: string;
  project: string;
  clientDescription: string;
  summary: string;
  periods: ContributionPeriod[];
  contributions: ProjectContribution[];
  teamNote: string;
}

export const experience: ExperienceData[] = [
  {
    company: 'Mandatech Mataram Mukti',
    role: 'Software Engineer',
    scopeLabel: 'Backend · Web · Mobile',
    project: 'Field Management System',
    clientDescription: 'An agribusiness company',
    summary:
      'Contributing to the development and maintenance of a production field management platform, covering Laravel APIs, React interfaces, and React Native workflows for agricultural operations.',
    periods: [
      { label: 'Web contribution', period: 'October 2023 — Present' },
      { label: 'Mobile contribution', period: 'September 2025 — Present' },
    ],
    contributions: [
      {
        title: 'Field operations',
        description: 'Developed and maintained location details, activity planning, material accumulation, and exception-letter workflows across backend and web interfaces.',
      },
      {
        title: 'Water management',
        description: 'Built and extended equipment transfer, handover, pipe relocation, approval, and change-history workflows across web, backend, and mobile.',
      },
      {
        title: 'Field records',
        description: 'Worked on location notes, journals, and QC inspection features, including offline mobile data entry and synchronisation.',
      },
      {
        title: 'Background processing',
        description: 'Developed and maintained scheduled backend jobs, including location synchronisation, alongside mobile background-sync workflows.',
      },
      {
        title: 'Dynamic forms',
        description: 'Extended Form Generator capabilities and contributed to Form Studio v2 on mobile, including form fields, filtering, and signature-related notifications.',
      },
      {
        title: 'Reporting and supporting features',
        description: 'Implemented spreadsheet import/export features and contributed to permissions, collaboration tools, and reusable interface components.',
      },
    ],
    teamNote: 'Developed as part of a team, with responsibility for specific modules and workflows.',
  },
];

