import { App } from '@slack/bolt'

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
})

app.message('hi', async ({ message, say }) => {
  console.log(message)
  await say(`hi(events API)`)
})

const main = async () => {
  await app.start(process.env.PORT || 3000)
  console.log('start')
}

main()
