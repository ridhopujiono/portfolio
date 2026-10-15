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
      'I enjoy building reliable systems across the stack. While my core expertise lies in developing robust Laravel backends, I frequently work with React and React Native to deliver cohesive web and mobile experiences.',
      'I’m particularly interested in the practical details that make software useful in the real world: clear business rules, reliable background processing, and building mobile workflows that remain fully functional even when connectivity is limited.'
    ]
  }
};
