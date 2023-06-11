import Nullstack from 'nullstack'

import './WorkExperience.css'
import { IWorkExperience, IWorkExperienceRole } from '../../interfaces/databaseInterfaces'
import { MyServerContext } from '../../interfaces/myServerContext'
import { WorkExperiencesModel } from '../../models/databaseModels'

class WorkExperiences extends Nullstack {

  workExperiences: IWorkExperience[] = []

  static async fetchWorkExperiencesFromDB(context?: MyServerContext) {
    const { database } = context
    return (await database.collection('work_experiences').find({}).toArray()) as unknown as WorkExperiencesModel[]
  }

  async fetchWorkExperiences() {
    this.workExperiences = await WorkExperiences.fetchWorkExperiencesFromDB()
  }

  async hydrate() {
    await this.fetchWorkExperiences()
  }

  calculateTimeDifference({ startDate, endDate }): string {
    let yearsDifference = endDate.getFullYear() - startDate.getFullYear()
    let monthsDifference = endDate.getMonth() - startDate.getMonth()

    if (monthsDifference < 0) {
      yearsDifference--
      monthsDifference += 12
    }

    const yearString = yearsDifference > 1 ? 'years' : 'year'
    const monthString = monthsDifference > 1 ? 'months' : 'month'

    let result = ''
    if (yearsDifference > 0) {
      result += `${yearsDifference} ${yearString}`
      if (monthsDifference > 0) {
        result += ` e ${monthsDifference} ${monthString}`
      }
    } else {
      result = `${monthsDifference} ${monthString}`
    }

    return result
  }

  getEndDate({ endDate }): Date {
    return endDate || new Date()
  }

  renderRoleStartAndEndDate({ startDate, endDate }: IWorkExperienceRole) {
    const startDateString = startDate.toLocaleDateString('en', { month: 'short', year: 'numeric' })

    const secureEndDate = this.getEndDate({ endDate })

    const endDateString = secureEndDate.toLocaleDateString('en', { month: 'short', year: 'numeric' })

    const difference = this.calculateTimeDifference({ startDate, endDate: secureEndDate })

    return (
      <p>
        {startDateString} - {endDateString} ({difference})
      </p>
    )
  }

  renderCompanyWorkTime({ roles }: IWorkExperience) {
    const firstRole = roles[roles.length - 1]
    const lastRole = roles[0]

    const startDate = firstRole.startDate
    const endDate = this.getEndDate({ endDate: lastRole.endDate })

    const difference = this.calculateTimeDifference({ startDate, endDate })
    return <>{difference}</>
  }

  renderRoles({ roles }: IWorkExperience, index: number) {
    if (!roles) return <></>

    const rolesInThisCompany = roles.length
    return (
      <>
        {roles?.map((role, roleIndex) => (
          <div key={roleIndex} class={'role'}>
            <p key={index + roleIndex}>{role.jobName}</p>
            {rolesInThisCompany > 1 ? this.renderRoleStartAndEndDate(role) : null}
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
              {this.renderCompanyWorkTime(experience)}
              {this.renderRoles(experience, index)}
            </div>
          </div>
        ))}
      </>
    )
  }

}

export default WorkExperiences
