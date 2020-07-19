import { WebClient, WebAPICallOptions } from '@slack/web-api'
import { saveLog } from '../../utils/files'
import { App } from '@slack/bolt'

/**
 * ChatPostMessage(node)
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

/**
 * ChatPostMessage(bolt-js)
 */
export const BoltChatPostMessage = async (
  app: App,
  text: string,
  convesation: string,
  token: string,
  otherProps?: WebAPICallOptions,
): Promise<void> => {
  try {
    const res = await app.client.chat.postMessage({
      text,
      channel: convesation,
      token,
      ...otherProps,
    })
    saveLog(res, 'BoltChatPostMessage')
  } catch (err) {
    throw new Error(err)
  }
}
