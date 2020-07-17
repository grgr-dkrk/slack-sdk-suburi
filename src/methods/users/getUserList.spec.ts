import 'jest'
import { WebClient } from '@slack/web-api'
import { GetUserList } from './getUserList'
import * as Files from '../../utils/files'

const spy = jest.spyOn(Files, 'saveLog')

const webMock = () =>
  (({
    users: {
      list: async () => ({
        res: 'ok',
      }),
    },
  } as unknown) as WebClient)

describe('getUsersList', () => {
  it('should run saveLog on successful', async () => {
    spy.mockImplementationOnce(() => true)
    await GetUserList(webMock())
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
