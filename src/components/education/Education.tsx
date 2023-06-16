import Nullstack from 'nullstack'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

import { IEducation } from '../../interfaces/databaseInterfaces'
import { MyServerContext } from '../../interfaces/myServerContext'
import { EducationModel } from '../../models/databaseModels'

class Education extends Nullstack {

  educationList: IEducation[] = []


  static async fetchEducationFromDB(context?: MyServerContext) {
    const { database } = context

    return (await database.collection('education').find({}).toArray()) as unknown as EducationModel[]
  }

  async fetchEducation() {
    const formatDate = (dateToFormat: string | undefined) => {
      if (dateToFormat === undefined) return ''
      const parts = dateToFormat.split('/')
      const date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]))

      return format(date, 'MMM yyyy', { locale: pt })
    }

    const educationFromDB = await Education.fetchEducationFromDB()
    this.educationList = educationFromDB?.map((education) => {
      const startDate = formatDate(education.startDate)
      const endDate = formatDate(education.endDate)

      return {
        ...education,
        startDate,
        endDate,
      }
    })
  }

  async hydrate() {
    await this.fetchEducation()
  }

  renderEducation(education: IEducation) {
    return (
      <div>
        <p>{education.university}</p>
        <p>
          {education.degree}, {education.field}
        </p>
        <p>
          {education.startDate} - {education.stillLearning ? 'Present' : education.endDate}
        </p>
        <p>
          {education.description?.split('\n').map((line) => (
            <p>{line}</p>
          ))}
        </p>
      </div>
    )
  }

  render() {
    return (
      <>
        {!!this.educationList?.length && (
          <>
            <h2>Education</h2>
            {this.educationList.map((education) => this.renderEducation(education))}
          </>
        )}
      </>
    )
  }

}

export default Education
