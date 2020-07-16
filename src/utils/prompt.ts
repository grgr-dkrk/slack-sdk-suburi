import * as inquirer from 'inquirer'

/**
 * Start Prompt
 */
export const startPrompt = async (choices: string[]): Promise<string> => {
  try {
    const choice = await inquirer.prompt({
      name: 'choice',
      type: 'list',
      message: 'select a method',
      choices,
    })
    return choice['choice']
  } catch (err) {
    throw new Error(err)
  }
}
