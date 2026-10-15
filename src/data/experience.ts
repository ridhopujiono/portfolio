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
  isConfidential?: boolean;
  summary: string;
  periods: ContributionPeriod[];
  contributions: ProjectContribution[];
  teamNote: string;
  cta?: {
    text: string;
    link: string;
  };
}

export const experience: ExperienceData[] = [
  {
    company: 'Mandatech Mataram Mukti',

    role: 'Software Engineer',

    scopeLabel: 'Backend · Web · Mobile',

    project: 'Field Management System',

    clientDescription: 'An agribusiness company',

    isConfidential: true,

    summary:
      'Contributed to the development and maintenance of a production field management platform, covering Laravel APIs, React interfaces, and React Native workflows for agricultural operations.',

    periods: [
      { label: 'Web contribution', period: 'October 2023 — October 2026' },
      { label: 'Mobile contribution', period: 'September 2025 — October 2026' },
    ],

    contributions: [
      {
        title: 'Field operations',
        description:
          'Activity planning, material management, and Exception Letters.',
      },
      {
        title: 'Water management',
        description:
          'Equipment transfers, handovers, and approvals.',
      },
      {
        title: 'Offline mobile',
        description:
          'Field records, SQLite, and data synchronisation.',
      },
      {
        title: 'Backend automation',
        description:
          'Scheduled jobs, API development, and reporting.',
      },
    ],

    teamNote:
      'Developed as part of a team, with responsibility for specific modules and workflows.',
    cta: {
      text: 'Read FMS case study',
      link: '/projects/field-management-system/'
    }
  },
  {
    company: 'Rakamin Academy',

    role: 'Class Coordinator',

    scopeLabel: 'Education · Coordination',

    project: 'Full Stack Web Development',

    clientDescription:
      'Technology education and professional development program',

    summary:
      'Coordinated and supported the delivery of a Full Stack Web Development learning program, helping maintain communication, class operations, and participant engagement throughout the program.',

    periods: [
      {
        label: 'Class coordination',
        period: 'December 2022 - October 2023',
      },
    ],

    contributions: [
      {
        title: 'Class operations',
        description:
          'Coordinated schedules, attendance, assignments, and day-to-day class activities.',
      },
      {
        title: 'Participant support',
        description:
          'Assisted participants with learning-related issues and helped communicate concerns to the relevant team.',
      },
      {
        title: 'Tutor coordination',
        description:
          'Maintained communication between tutors, participants, and the program team.',
      },
      {
        title: 'Feedback & engagement',
        description:
          'Documented participant feedback and supported activities to maintain class engagement.',
      },
    ],

    teamNote:
      'Worked as part of the education program team, supporting both operational coordination and the participant learning experience.',
  },
  {
    company: 'Mahamitra',

    role: 'Software Developer',

    scopeLabel: 'Web · Mobile',

    project: 'Digital Products & Applications',

    clientDescription:
      'Various clients and organisations',

    summary:
      'Developed and contributed to various web and mobile applications across different domains, ranging from news platforms and reporting systems to learning management and service marketplaces.',

    periods: [
      {
        label: 'Software development',
        period: 'August 2020 - November 2022',
      },
    ],

    contributions: [
      {
        title: 'Kabartuban.com',
        description:
          'Development of a news and digital publishing platform for local content.',
      },
      {
        title: 'Jousuba Papua',
        description:
          'Development of a reporting system to support digital reporting workflows.',
      },
      {
        title: 'LMS Sespim Polri',
        description:
          'Development of a learning management system for education and training workflows.',
      },
      {
        title: 'Dakdok.id',
        description:
          'Development of a service marketplace connecting users with service providers.',
      },
      {
        title: 'PCNU Tuban ecosystem',
        description:
          'Development of digital services and applications supporting the PCNU Tuban ecosystem.',
      },
    ],

    teamNote:
      'Worked across multiple projects and domains, contributing to application development and implementation based on project requirements.',
  },
];