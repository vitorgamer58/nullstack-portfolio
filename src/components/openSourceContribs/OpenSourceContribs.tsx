import Nullstack from 'nullstack'

import { IOpenSourceContribs } from '../../interfaces/databaseInterfaces'
import { MyServerContext } from '../../interfaces/myServerContext'
import { OpenSourceContribsModel } from '../../models/databaseModels'

class OpenSourceContribs extends Nullstack {

  openSourceContribs: IOpenSourceContribs[] = []

  static async fetchOpenSourceContribsFromDB(context?: MyServerContext) {
    const { database } = context

    return (await database
      .collection('open_source_contribs')
      .find({})
      .toArray()) as unknown as OpenSourceContribsModel[]
  }

  async fetchWorkExperiences() {
    this.openSourceContribs = await OpenSourceContribs.fetchOpenSourceContribsFromDB()
  }

  async hydrate() {
    await this.fetchWorkExperiences()
  }

  render() {
    return (
      <>
        {this.openSourceContribs?.length > 0 ? (
          <>
            <h2>Open source contribs and accepted pull requests</h2>
            {this.openSourceContribs.map(({ title, description, link }, index) => (
              <div key={index}>
                <h4>
                  <a href={link}>{title}</a>
                </h4>
                {description?.split('\n').map((line) => (
                  <p>{line}</p>
                ))}
              </div>
            ))}
          </>
        ) : null}
      </>
    )
  }

}

export default OpenSourceContribs
