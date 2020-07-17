import 'jest'
import { WebClient } from '@slack/web-api'
import { ChatPostMessage } from './postMessage'
import * as Files from '../../utils/files'

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

describe('chatPostMessae', () => {
  afterEach(() => {
    spy.mockReset()
  })
  it('should run saveLog on successful', async () => {
    spy.mockImplementationOnce(() => true)
    await ChatPostMessage(webMock(), 'hello', 'general')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
