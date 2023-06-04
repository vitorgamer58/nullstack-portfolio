export interface ISummary {
  name: string
  role: string
  intro: string
  image: string
}

export interface IWorkExperience {
  logo: string
  companyName: string
  roles: IWorkExperienceRole[]
}

export interface IWorkExperienceRole {
  jobName: string
  description: string
}

export interface IEducation {
  university: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  stillLearning: boolean
  description?: string
}

export enum Languages {
  Javascript = 'Javascript',
  CPlusPlus = 'C++',
  Herbs = 'Herbs',
}

export interface IPersonalProject {
  projectName: string
  description?: string
  demoLink?: string
  sourceLink?: string
  languages: Languages[]
}

export type LanguageLogo = { [L in Languages]?: string }

export interface IOpenSourceContribs {
  title: string
  description: string
  link: string
}
