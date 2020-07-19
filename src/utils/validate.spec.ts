import 'jest'
import { validatePrefix } from './validate'

describe('validatePrefix', () => {
  it('should not throw error if valid', () => {
    expect(() => validatePrefix('foo1234', 'foo', 'error!')).not.toThrow()
  })
  it('should throw error if invalid', () => {
    expect(() => validatePrefix('foo1234', 'bar', 'error!')).toThrowError(
      'error!',
    )
  })
})
