import { WebClient } from '@slack/web-api'
import { saveLog } from '../../utils/files'

/**
 * Get All User List
 */
export const GetUserList = async (web: WebClient): Promise<void> => {
  try {
    const res = await web.users.list()
    saveLog(res, 'GetUserList')
  } catch (err) {
    throw new Error(err)
  }
}
