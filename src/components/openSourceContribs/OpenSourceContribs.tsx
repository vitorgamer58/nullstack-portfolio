import Nullstack, { NullstackServerContext } from 'nullstack'

import { IOpenSourceContribs } from '../../interfaces/databaseInterfaces'
import Database from '../../repositories/database'

class OpenSourceContribs extends Nullstack {

  openSourceContribs: IOpenSourceContribs[] = []

  static async fetchOpenSourceContribsFromDB(context?: NullstackServerContext) {
    const database = new Database(context.secrets.connectionString)
    return database.getOpenSourceContribs()
  }

  async fetchWorkExperiences() {
    this.openSourceContribs = await OpenSourceContribs.fetchOpenSourceContribsFromDB()
  }

  async initiate() {
    await this.fetchWorkExperiences()
  }

  render() {
    return (
      <>
        {this.openSourceContribs.length && (
          <>
            <h2>Open source contribs and accepted pull requests</h2>
            {this.openSourceContribs.map(({ title, description, link }, index) => (
              <div key={index}>
                <h4>
                  <a href={link}>{title}</a>
                </h4>
                {description?.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </div>
            ))}
          </>
        )}
      </>
    )
  }

}

export default OpenSourceContribs
