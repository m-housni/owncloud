import { urlJoin } from 'web-client/src/utils'

describe('proper-url-join', () => {
  it.each([
    [['http://foobar.com'], 'http://foobar.com'],
    [['http://foobar.com/'], 'http://foobar.com'],
    [['/', ''], '/'],
    [['/', 'foo'], '/foo'],
    [['/', 'foo/'], '/foo'],
    [['foo/'], '/foo'],
    [['/', undefined], '/'],
    [['', { leadingSlash: true }], '/'],
    [[undefined, { leadingSlash: true }], '/'],
    [['/', 2], '/2'],
    [['//', '/fol//der//', '//file'], '/fol/der/file'],
    [['?&@'], '/?&@']
  ])('joins %s as %s', (args: any, expected: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(urlJoin(...args)).toBe(expected)
  })
})
