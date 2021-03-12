const { search } = require('../src/friday')

describe('search', () => {
  it('returns dummy', async () => {
    expect(await search()).toBe('dummy')
  })
})
