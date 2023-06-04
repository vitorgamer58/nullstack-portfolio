import Nullstack, { NullstackServerContext } from 'nullstack'

import { IPersonalProject, LanguageLogo } from '../../interfaces/databaseInterfaces'
import Database from '../../repositories/database'
import './PersonalProjects.css'

class PersonalProjects extends Nullstack {

  personalProjects: IPersonalProject[] = []
  programmingLanguagesLogo: LanguageLogo = {}

  static async fetchPersonalProjectsFromDB(context?: NullstackServerContext) {
    const database = new Database(context.secrets.connectionString)
    return database.getPersonalProjects()
  }

  static async fetchLanguagesLogoFromDB(context?: NullstackServerContext) {
    const database = new Database(context.secrets.connectionString)
    return database.getProgrammingLanguagesLogo()
  }

  async fetchPersonalProjects() {
    this.personalProjects = await PersonalProjects.fetchPersonalProjectsFromDB()
    this.programmingLanguagesLogo = await PersonalProjects.fetchLanguagesLogoFromDB()
  }

  async initiate() {
    await this.fetchPersonalProjects()
  }

  renderProject({ projectName, description, languages }: IPersonalProject, index: number) {
    return (
      <>
        <div key={index} class={'project'}>
          <p>{projectName}</p>
          <p>{description}</p>
          <div class={'languages'}>
            {languages.map((language, imgIndex) => (
              <div class={'languageDiv'}>
                <p>{language}</p>
                {/* <img src={this.programmingLanguagesLogo[language]} alt="" key={imgIndex} class={'languageLogo'} /> */}
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  render() {
    return (
      <>
        {this.personalProjects.length ? (
          <div>
            <h2>Personal Projects</h2>
            {this.personalProjects.map((project, index) => (
              <>{this.renderProject(project, index)}</>
            ))}
          </div>
        ) : null}
      </>
    )
  }

}

export default PersonalProjects
