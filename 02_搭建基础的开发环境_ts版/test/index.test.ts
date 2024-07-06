import { hi } from '@utils/hi'

describe('单元测试', () => {
  it('测试用例', () => {
    const arr = [1, 2, 3]

    expect(arr.map((n) => n + 2)).toEqual([3, 4, 5])
  })

  it('测试别名', () => {
    expect(hi).toBe('hi')
  })
})
