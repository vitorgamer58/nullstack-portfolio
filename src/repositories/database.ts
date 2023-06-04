import {
  IEducation,
  IOpenSourceContribs,
  IPersonalProject,
  ISummary,
  IWorkExperience,
  LanguageLogo,
} from '../interfaces/databaseInterfaces'
import {
  educationMock,
  openSourceContribsMock,
  personalProjectsMock,
  programmingLanguagesLogoMock,
  summaryMock,
  workExperiencesMock,
} from './databaseMock'

class Database {

  connectionString: string

  constructor(connectionString: string | boolean) {
    if (typeof connectionString !== 'string') {
      throw new Error('Invalid connection string')
    }

    this.connectionString = connectionString
  }

  async getSummary(): Promise<ISummary> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(summaryMock)
      }, 100)
    })
  }

  async getWorkExperience(): Promise<IWorkExperience[]> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(workExperiencesMock)
      }, 500)
    })
  }

  async getEducation(): Promise<IEducation[]> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(educationMock)
      }, 500)
    })
  }

  async getPersonalProjects(): Promise<IPersonalProject[]> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(personalProjectsMock)
      }, 500)
    })
  }

  async getProgrammingLanguagesLogo(): Promise<LanguageLogo> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(programmingLanguagesLogoMock)
      }, 500)
    })
  }

  async getOpenSourceContribs(): Promise<IOpenSourceContribs[]> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(openSourceContribsMock)
      }, 500)
    })
  }

}

export default Database
