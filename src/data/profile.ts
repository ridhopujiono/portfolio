export interface ProfileData {
  name: string;
  location: string;
  role: string;
  focus: string[];
  summary: string;
  photo: string | null;
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
}

export const profile: ProfileData = {
  name: 'Ridho Pujiono',
  location: 'Tuban, East Java, Indonesia',
  role: 'Software Engineer',
  focus: ['Backend development', 'Full-stack web development', 'Mobile development'],
  summary:
    'I am a software engineer based in Tuban, East Java, Indonesia, focused on backend, full-stack web, and mobile development.',
  photo: null,
  about: {
    eyebrow: 'ABOUT',
    heading: 'Backend-focused. Comfortable across the stack.',
    paragraphs: [
      'I’m Ridho, a software engineer based in Tuban, Indonesia. My work spans Laravel backends, React web interfaces, and React Native mobile applications.',
      'Through Mandatech Mataram Mukti, I contribute to a field management platform for agricultural operations. My work includes activity planning, water management, field records, and the data synchronisation that connects web and mobile workflows.',
      'I’m particularly interested in the practical details that make these systems useful: clear business rules, reliable background processing, and mobile workflows that remain usable when connectivity is limited.'
    ]
  }
};
