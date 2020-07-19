export const validatePrefix = (
  target: string,
  prefix: string,
  errorMessage: string,
): void => {
  if (!target.startsWith(prefix)) {
    throw new Error(errorMessage)
  }
}
