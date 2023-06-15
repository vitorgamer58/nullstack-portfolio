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

  async initiate() {
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
        result += ` ${monthsDifference} ${monthString}`
      }
    } else {
      result = `${monthsDifference} ${monthString}`
    }

    return result
  }

  getEndDate({ endDate }): Date {
    return endDate || new Date()
  }

  getMonthAndYear({ date }): string {
    return date.toLocaleDateString('en', { month: 'short', year: 'numeric' })
  }

  renderRoleStartAndEndDate({ startDate, endDate }: IWorkExperienceRole) {
    const startDateString = this.getMonthAndYear({ date: startDate })

    const secureEndDate = this.getEndDate({ endDate })

    const endDateString = this.getMonthAndYear({ date: endDate })

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

  renderRoles({ roles }: IWorkExperience) {
    if (!roles) return <></>

    const rolesInThisCompany = roles.length
    return (
      <>
        {roles?.map((role) => (
          <div class={'role'}>
            <p>{role.jobName}</p>
            {rolesInThisCompany > 1 ? this.renderRoleStartAndEndDate(role) : null}
            {role.description?.split('\n').map((line) => (
              <p>{line}</p>
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
        {this.workExperiences?.map((experience) => (
          <div class={'experience'}>
            <div class={'lateral'}>
              <img src={experience.logo} alt="Company logo" />
            </div>
            <div>
              <div class={'companyInformation'}>
                <p>{experience?.companyName}</p>
                {this.renderCompanyWorkTime(experience)}
              </div>
              <div class={'content'}>{this.renderRoles(experience)}</div>
            </div>
          </div>
        ))}
      </>
    )
  }

}

export default WorkExperiences
