import sql from 'sql-template-strings'
import PGWrapper from '../../common/utils/pg-wrapper'

export async function verifyAdmin(userHandle) {
  const query = sql`select * from admins where user_handle = ${userHandle};`

  const admins = await PGWrapper.sqlAndMap(query, (row) => ({
    userHandle: row.user_handle,
    id: row.id
  }))

  return admins[0]
}
