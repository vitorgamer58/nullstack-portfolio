import Nullstack from 'nullstack'

import { IPersonalProject } from '../../interfaces/databaseInterfaces'
import { MyServerContext } from '../../interfaces/myServerContext'
import { PersonalProject } from '../../models/databaseModels'
import './PersonalProjects.css'

class PersonalProjects extends Nullstack {

  personalProjects: IPersonalProject[] = []

  static async fetchPersonalProjectsFromDB(context?: MyServerContext) {
    const { database } = context
    return (await database.collection('personal_projects').find({}).toArray()) as unknown as PersonalProject[]
  }

  async fetchPersonalProjects() {
    this.personalProjects = await PersonalProjects.fetchPersonalProjectsFromDB()
  }

  async hydrate() {
    await this.fetchPersonalProjects()
  }

  renderProject({ projectName, description }: IPersonalProject) {
    return (
      <>
        <div class={'project'}>
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
            {this.personalProjects.map((project) => (
              <>{this.renderProject(project)}</>
            ))}
          </div>
        ) : null}
      </>
    )
  }

}

export default PersonalProjects
