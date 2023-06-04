import Nullstack from 'nullstack'

import { MongoClient, ServerApiVersion } from 'mongodb'

import Application from './src/Application'
import { MyServerContext } from './src/interfaces/myServerContext'

const context = Nullstack.start(Application) as MyServerContext

context.start = async function start() {
  // https://nullstack.app/pt-br/inicializacao-da-aplicacao
  const { secrets } = context

  if (typeof secrets.mongodbUri === 'string' && typeof secrets.databaseName === 'string') {
    const databaseClient = new MongoClient(secrets.mongodbUri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    })
    await databaseClient.connect()

    context.database = await databaseClient.db(secrets.databaseName)
  }
}

export default context
