import Nullstack, { NullstackServerContext } from 'nullstack'

import { IPersonalProject } from '../../interfaces/databaseInterfaces'
import Database from '../../repositories/database'
import './PersonalProjects.css'

class PersonalProjects extends Nullstack {

  personalProjects: IPersonalProject[] = []

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
  }

  async initiate() {
    await this.fetchPersonalProjects()
  }

  renderProject({ projectName, description }: IPersonalProject, index: number) {
    return (
      <>
        <div key={index} class={'project'}>
          <p>{projectName}</p>
          <p>{description}</p>
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
