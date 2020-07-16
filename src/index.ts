import { startPrompt } from './utils/prompt'
import { methods, getMethodLabels, invoke } from './methods'

const main = async (): Promise<void> => {
  const label = await startPrompt(getMethodLabels(methods))
  await invoke(methods, label)
}

main()
