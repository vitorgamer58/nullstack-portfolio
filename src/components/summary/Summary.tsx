import Nullstack from 'nullstack'

import './Summary.css'
import { ISummary } from '../../interfaces/databaseInterfaces'
import { MyServerContext } from '../../interfaces/myServerContext'
import { SummaryModel } from '../../models/databaseModels'

class Summary extends Nullstack {

  summary: ISummary

  static async fetchSummaryFromDB(context?: MyServerContext) {
    const { database } = context
    return (await database.collection('summary').findOne({})) as unknown as SummaryModel
  }

  async fetchSummary() {
    this.summary = await Summary.fetchSummaryFromDB()
  }

  async hydrate() {
    await this.fetchSummary()
  }

  renderSummary({ name, role, image, intro }: ISummary) {
    return (
      <div>
        <div class={'summary'}>
          <img src={image} alt="profile pitcure" class={'profilePitcure'} />
          <div class={'profileInformation'}>
            <p class={'name'}>{name}</p>
            <p>{role}</p>
          </div>
        </div>
        <div class={'intro'}>
          <h3>Intro</h3>
          <div class={'content'}>
            {intro.split('\n').map((line) => (
              <p>{line}</p>
            ))}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return <>{this.summary ? this.renderSummary(this.summary) : null}</>
  }

}

export default Summary
