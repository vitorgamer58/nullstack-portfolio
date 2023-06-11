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
  startDate: Date
  endDate?: Date
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

export interface IPersonalProject {
  projectName: string
  description?: string
  demoLink?: string
  sourceLink?: string
}

export interface IOpenSourceContribs {
  title: string
  description: string
  link: string
}
