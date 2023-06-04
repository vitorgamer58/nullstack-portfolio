import Nullstack, { NullstackServerContext } from 'nullstack'

import './WorkExperience.css'
import { IWorkExperience } from '../../interfaces/databaseInterfaces'
import Database from '../../repositories/database'

class WorkExperiences extends Nullstack {

  workExperiences: IWorkExperience[] = []

  static async fetchWorkExperiencesFromDB(context?: NullstackServerContext) {
    const database = new Database(context.secrets.connectionString)
    return database.getWorkExperience()
  }

  async fetchWorkExperiences() {
    this.workExperiences = await WorkExperiences.fetchWorkExperiencesFromDB()
  }

  async initiate() {
    await this.fetchWorkExperiences()
  }

  renderRoles(experience: IWorkExperience, index: number) {
    return (
      <>
        {experience?.roles.map((role, roleIndex) => (
          <div key={roleIndex} class={'role'}>
            <p key={index + roleIndex}>{role.jobName}</p>
            {role.description?.split('\n').map((line, lineIndex) => (
              <p key={lineIndex + roleIndex}>{line}</p>
            ))}
          </div>
        ))}
      </>
    )
  }

  render() {
    return (
      <>
        <h2>Profissional experience</h2>
        {this.workExperiences?.map((experience, index) => (
          <div class={'experience'}>
            <img src={experience.logo} alt="Company logo" />
            <div class={'content'}>
              <p key={index}>{experience?.companyName}</p>
              {this.renderRoles(experience, index)}
            </div>
          </div>
        ))}
      </>
    )
  }

}

export default WorkExperiences
