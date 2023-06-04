import Nullstack from 'nullstack'

import './Summary.css'
import { MyServerContext } from '../../interfaces/myServerContext'
import { SummaryModel } from '../../models/databaseModels'

class Summary extends Nullstack {

  name = ''
  role = ''
  profilePitcure = ''
  intro = ''

  static async fetchSummaryFromDB(context?: MyServerContext) {
    const { database } = context
    return (await database.collection('summary').findOne({})) as unknown as SummaryModel
  }

  async fetchSummary() {
    const { name, role, image, intro } = await Summary.fetchSummaryFromDB()

    this.name = name
    this.role = role
    this.profilePitcure = image
    this.intro = intro
  }

  async hydrate() {
    await this.fetchSummary()
  }

  render() {
    return (
      <div>
        <div class={'summary'}>
          <img src={this.profilePitcure} alt="profile pitcure" class={'profilePitcure'} />
          <div class={'profileInformation'}>
            <p class={'name'}>{this.name}</p>
            <p>{this.role}</p>
          </div>
        </div>
        <div class={'intro'}>
          <h3>Intro</h3>
          <div class={'content'}>
            {this.intro.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    )
  }

}

export default Summary
