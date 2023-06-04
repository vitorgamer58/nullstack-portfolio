import Nullstack from 'nullstack'

import Database from '../../repositories/database'
import './Summary.css'

class Summary extends Nullstack {

  name = ''
  role = ''
  profilePitcure = ''
  intro = ''

  static async fetchSummaryFromDB() {
    const database = new Database('')
    return database.getSummary()
  }

  async fetchSummary() {
    const { name, role, image, intro } = await Summary.fetchSummaryFromDB()

    this.name = name
    this.role = role
    this.profilePitcure = image
    this.intro = intro
  }

  async initiate() {
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
