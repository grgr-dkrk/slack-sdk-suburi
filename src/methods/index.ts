import { App } from '@slack/bolt'
import { getBotToken, getSigningSecret } from '../utils/getSlackToken'
import { WebClient } from '@slack/web-api'
import { ChatPostMessage, BoltChatPostMessage } from './chat/postMessage'
import { CONVERSATIONS } from '../constants/conversations'
import { GetUserList } from './users/getUserList'

const token = getBotToken()
const signingSecret = getSigningSecret()
const web = new WebClient(token)
const app = new App({
  signingSecret,
  token,
})

export type Method = { label: string; fn: () => Promise<void> }

export const methods: Method[] = [
  {
    label: 'ChatPostMessage',
    fn: async (): Promise<void> => {
      ChatPostMessage(web, 'hi(node)', CONVERSATIONS.GENERAL)
    },
  },
  {
    label: 'BoltChatPostMessage',
    fn: async (): Promise<void> => {
      BoltChatPostMessage(app, 'hi(bolt)', CONVERSATIONS.GENERAL, token)
    },
  },
  {
    label: 'GetUsersList',
    fn: async (): Promise<void> => {
      GetUserList(web)
    },
  },
]

/**
 * get labels from methodList
 */
export const getMethodLabels = (methodList: Method[]): Method['label'][] =>
  methodList.map((method) => method.label)

/**
 * invoke
 */
export const invoke = async (
  methodList: Method[],
  label: Method['label'],
): Promise<void> => {
  const mathedMethod = methodList.find((method) => method.label === label)
  if (!mathedMethod) throw new Error(`The method label ${label} is invalid.`)
  await mathedMethod.fn()
}
