import { startPrompt } from './utils/prompt'
import { methods, getMethodLabels, invoke } from './methods'
import * as minimist from 'minimist'

const main = async (): Promise<void> => {
  const options = minimist(process.argv.slice(2))
  if (options['m']) {
    await invoke(methods, options['m'])
    process.exit(0)
  }
  const label = await startPrompt(getMethodLabels(methods))
  await invoke(methods, label)
}

main()
