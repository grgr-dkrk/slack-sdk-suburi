import { validatePrefix } from './validate'

/**
 * Get Bot Token
 * - get Bot token which name starts with `xoxb-` prefix
 */
export const getBotToken = (): string => {
  // SLACK_TOKEN: https://slack.dev/node-slack-sdk/web-api
  // SLACK_BOT_TOKEN: https://slack.dev/bolt-js/ja-jp/tutorial/getting-started
  const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || process.env.SLACK_TOKEN
  if (!SLACK_BOT_TOKEN)
    throw new Error(
      'SLACK_BOT_TOKEN or SLACK_TOKEN must exist. check the  "Bot User OAuth Access Token" on https://api.slack.com/apps/XXXXXXXXX/oauth?',
    )
  validatePrefix(
    SLACK_BOT_TOKEN,
    'xoxb-',
    'SLACK_BOT_TOKEN or SLACK_TOKEN is invalid. a token must have "xoxb-" prefix ',
  )
  return SLACK_BOT_TOKEN
}

/**
 * Get User Token
 * - get User token which name starts with `xoxp-` prefix
 */
export const getUserToken = (): string => {
  const SLACK_USER_TOKEN = process.env.SLACK_USER_TOKEN
  if (!SLACK_USER_TOKEN)
    throw new Error(
      'SLACK_USER_TOKEN must exist. check the "OAuth Access Token" on https://api.slack.com/apps/XXXXXXXXX/oauth?',
    )
  validatePrefix(
    SLACK_USER_TOKEN,
    'xoxp-',
    'SLACK_USER_TOKEN is invalid. a token must have "xoxp-" prefix ',
  )
  return SLACK_USER_TOKEN
}

/**
 * Get Signing Secret
 */
export const getSigningSecret = (): string => {
  const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET
  if (!SLACK_SIGNING_SECRET)
    throw new Error(
      'SLACK_SIGNING_SECRET must exist. check the "App Credentials" on https://api.slack.com/apps/XXXXXXXXX/general?',
    )
  return SLACK_SIGNING_SECRET
}
