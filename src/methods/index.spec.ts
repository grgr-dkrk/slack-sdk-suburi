import 'jest'
import { getMethodLabels, invoke } from '.'

describe('getMethodLabels', () => {
  it('should return "[foo, bar]"', () => {
    const labels = getMethodLabels([
      {
        label: 'foo',
        fn: jest.fn(),
      },
      {
        label: 'bar',
        fn: jest.fn(),
      },
    ])
    expect(labels).toStrictEqual(['foo', 'bar'])
  })
  it('should return "[]" when methodList is empty', () => {
    const labels = getMethodLabels([])
    expect(labels).toStrictEqual([])
  })
})

describe('invoke', () => {
  const spyFoo = jest.fn()
  const spyBar = jest.fn()
  const methods = [
    {
      label: 'foo',
      fn: spyFoo,
    },
    {
      label: 'bar',
      fn: spyBar,
    },
  ]
  beforeEach(() => {
    spyFoo.mockReset()
    spyBar.mockReset()
  })
  it('should invoked fn() of "foo" labelled', async () => {
    await invoke(methods, 'foo')
    expect(spyFoo).toBeCalledTimes(1)
    expect(spyBar).toBeCalledTimes(0)
  })
  it('should invoked fn() of "bar" labelled', async () => {
    await invoke(methods, 'bar')
    expect(spyFoo).toBeCalledTimes(0)
    expect(spyBar).toBeCalledTimes(1)
  })
  it('should throw error if label is invalid', async () => {
    await expect(invoke(methods, 'my_invalid_label')).rejects.toThrowError(
      'The method label my_invalid_label is invalid.',
    )
  })
})
