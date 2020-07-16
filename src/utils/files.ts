import { WebAPICallResult } from '@slack/web-api'
import * as fs from 'fs'
import * as path from 'path'

/**
 * Check Exist and then create Directory
 */
export const checkExistAndCreateLogDir = (): void => {
  try {
    const isExist = fs.existsSync(path.resolve(__dirname, '../../log'))
    if (!isExist) fs.mkdirSync(path.resolve(__dirname, '../../log'))
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Save response to JSON
 */
export const saveLog = (res: WebAPICallResult, fileName: string): void => {
  try {
    const json = JSON.stringify(res, null, 2)
    checkExistAndCreateLogDir()
    fs.writeFileSync(
      path.resolve(__dirname, `../../log/${fileName}.json`),
      json,
    )
    console.log('[Save Successful]')
    console.info(res)
  } catch (err) {
    throw new Error(err)
  }
}
