import 'jest'
import { getBotToken, getUserToken, getSigningSecret } from './getSlackToken'

describe('getSlackToken', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetModules()
  })

  afterAll(() => {
    process.env = originalEnv
  })

  /**
   * Test: getBotToken
   */
  describe('getBotToken', () => {
    it('should return param of SLACK_BOT_TOKEN if it is exist', () => {
      process.env = {
        ...originalEnv,
        SLACK_BOT_TOKEN: 'xoxb-1234-abcd',
        SLACK_TOKEN: 'xoxb-abcd-1234',
      }
      const token = getBotToken()
      expect(token).toBe('xoxb-1234-abcd')
    })

    it('should return param of SLACK_TOKEN if SLACK_BOT_TOKEN is exist', () => {
      process.env = {
        ...originalEnv,
        SLACK_BOT_TOKEN: undefined,
        SLACK_TOKEN: 'xoxb-abcd-4567',
      }
      const token = getBotToken()
      expect(token).toBe('xoxb-abcd-4567')
    })

    it('should throw error if SLACK_BOT_TOKEN is invalid', () => {
      process.env = {
        ...originalEnv,
        SLACK_BOT_TOKEN: 'hoge-abcd-4567',
      }
      expect(() => getBotToken()).toThrow()
    })

    it('should throw error if SLACK_TOKEN is invalid', () => {
      process.env = {
        ...originalEnv,
        SLACK_BOT_TOKEN: undefined,
        SLACK_TOKEN: 'hoge-abcd-4567',
      }
      expect(() => getBotToken()).toThrow()
    })

    it('should throw error if tokens are not found', () => {
      process.env = {
        ...originalEnv,
        SLACK_BOT_TOKEN: undefined,
        SLACK_TOKEN: undefined,
      }
      expect(() => getBotToken()).toThrow()
    })
  })

  /**
   * Test: getUserToken
   */
  describe('getUserToken', () => {
    it('should return param of SLACK_USER_TOKEN if it is exist', () => {
      process.env = {
        ...originalEnv,
        SLACK_USER_TOKEN: 'xoxp-1234-abcd',
      }
      const token = getUserToken()
      expect(token).toBe('xoxp-1234-abcd')
    })

    it('should return param of SLACK_USER_TOKEN if it is exist', () => {
      process.env = {
        ...originalEnv,
        SLACK_USER_TOKEN: 'xoxp-1234-abcd',
      }
      const token = getUserToken()
      expect(token).toBe('xoxp-1234-abcd')
    })

    it('should throw error if SLACK_USER_TOKEN is invalid', () => {
      process.env = {
        ...originalEnv,
        SLACK_USER_TOKEN: 'xoxb-1234-abcd',
      }
      expect(() => getUserToken()).toThrow()
    })

    it('should throw if tokens are not found', () => {
      process.env = {
        ...originalEnv,
        SLACK_USER_TOKEN: undefined,
      }
      expect(() => getUserToken()).toThrow()
    })
  })

  /**
   * Test: getSigningSecret
   */
  describe('getSigningSecret', () => {
    it('should return param of SLACK_SIGNING_SECRET if it is exist', () => {
      process.env = {
        ...originalEnv,
        SLACK_SIGNING_SECRET: 'abcdefabcdef1234512345',
      }
      const signingSecret = getSigningSecret()
      expect(signingSecret).toBe('abcdefabcdef1234512345')
    })

    it('should throw if tokens are not found', () => {
      process.env = {
        ...originalEnv,
        SLACK_SIGNING_SECRET: undefined,
      }
      expect(() => getSigningSecret()).toThrow()
    })
  })
})
