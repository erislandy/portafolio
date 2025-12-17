export type Language = 'en' | 'es'

export interface Translations {
  navigation: {
    home: string
    about: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    title: string
    specialization: string
    description: string
    cta: string
  }
  about: {
    heading: string
    subheading: string
    paragraph1: string
    paragraph2: string
    traits: string[]
    features: {
      title: string
      description: string
    }[]
  }
  skills: {
    heading: string
    description: string
    technologiesHeading: string
    categories: {
      frontend: string
      backend: string
      cloudIot: string
    }
  }
  projects: {
    heading: string
    description: string
    otherHeading: string
    viewAll: string
    items: {
      title: string
      description: string
    }[]
  }
  contact: {
    heading: string
    description: string
    formHeading: string
    connectHeading: string
    connectDescription: string
    followMe: string
    labels: {
      firstName: string
      lastName: string
      email: string
      subject: string
      message: string
      phone: string
      location: string
    }
    placeholders: {
      firstName: string
      lastName: string
      email: string
      subject: string
      message: string
    }
    button: string
    footer: string
  }
}

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}
