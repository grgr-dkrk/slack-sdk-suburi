/**
 * Get Slack Token
 */
export const getSlackToken = (): string => {
  const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN
  if (!SLACK_TOKEN) throw new Error('SLACK_TOKEN must exist.')
  return SLACK_TOKEN
}
