import sql from 'sql-template-strings'
import PGWrapper from '../../common/pg-wrapper'

export async function login(userHandle) {
  const query = sql`select * from passhash where user_handle = ${userHandle};`

  const userAuths = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle,
    passhash: row.passhash
  }))

  return userAuths[0]
}
