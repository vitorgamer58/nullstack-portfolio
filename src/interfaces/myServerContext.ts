import { NullstackServerContext } from 'nullstack'

import { Db } from 'mongodb'

export interface MyServerContext extends NullstackServerContext {
  database: Db
}
