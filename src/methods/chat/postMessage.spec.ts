import 'jest'
import { WebClient } from '@slack/web-api'
import { ChatPostMessage, BoltChatPostMessage } from './postMessage'
import * as Files from '../../utils/files'
import { App } from '@slack/bolt'

const spy = jest.spyOn(Files, 'saveLog')

const webMock = () =>
  (({
    chat: {
      postMessage: async (message: string, conversation: string) => ({
        res: 'ok',
        message,
        conversation,
      }),
    },
  } as unknown) as WebClient)

const appMock = () =>
  (({
    client: {
      chat: {
        postMessage: async (message: string, conversation: string) => ({
          res: 'ok',
          message,
          conversation,
        }),
      },
    },
  } as unknown) as App)

describe('chatPostMessage', () => {
  afterEach(() => {
    spy.mockReset()
  })
  it('should run saveLog on successful', async () => {
    spy.mockImplementationOnce(() => true)
    await ChatPostMessage(webMock(), 'hello', 'general')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})

describe('boltChatPostMessage', () => {
  afterEach(() => {
    spy.mockReset()
  })
  it('should run saveLog on successful', async () => {
    spy.mockImplementationOnce(() => true)
    await BoltChatPostMessage(appMock(), 'hello', 'general', 'dummy')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
