import { WebClient, WebAPICallOptions } from '@slack/web-api'
import { saveLog } from '../../utils/files'

/**
 * ChatPostMessage
 */
export const ChatPostMessage = async (
  web: WebClient,
  text: string,
  conversation: string,
  otherProps?: WebAPICallOptions,
): Promise<void> => {
  try {
    const res = await web.chat.postMessage({
      text,
      channel: conversation,
      ...otherProps,
    })
    saveLog(res, 'ChatPostMessage')
  } catch (err) {
    throw new Error(err)
  }
}
