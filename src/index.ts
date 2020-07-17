import { startPrompt } from './utils/prompt'
import { methods, getMethodLabels, invoke } from './methods'

const main = async (): Promise<void> => {
  const methodLabel = process.argv[2]
  if (methodLabel) {
    await invoke(methods, methodLabel)
    process.exit(0)
  }
  const label = await startPrompt(getMethodLabels(methods))
  await invoke(methods, label)
}

main()
