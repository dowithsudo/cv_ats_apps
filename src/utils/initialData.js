export const initialCVData = {
  personalInfo: {
    fullName: "",
    phone: "",
    email: "",
    city: "",
    country: "",
    linkedin: "",
    portfolio: "",
  },
  summary: "",
  workExperience: [],
  education: [],
  skills: {
    technical: [],
    soft: [],
  },
  certifications: [],
  projects: [],
  languages: [],
  awards: [],
  volunteer: [],
  publications: [],
};

// Helper for unique IDs
export const generateId = () => Math.random().toString(36).substr(2, 9);
