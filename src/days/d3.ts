import { sum } from '../helper/math.js'
import { qstring } from '../helper/readfile.js'

const value = (char: string) => {
  return (
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) + 1
  )
}

const findDuplicate = (a: string) => {
  const comp1 = a.substring(0, a.length / 2)
  const comp2 = a.substring(a.length / 2)

  return findDuplicate2(comp1, comp2)
  //console.log(y)
}

const findDuplicate2 = (comp1: string, comp2: string) => {
  const res = new Set<string>()
  for (let i = 0; i < comp1.length; i++) {
    if (comp2.includes(comp1[i])) {
      res.add(comp1[i])
    }
  }

  if (res.size) {
    return sum(Array.from(res).map(value))
  }
  return 0
}

const findBadge = (comp1: string, comp2: string) => {
  const res = new Set<string>()
  for (let i = 0; i < comp1.length; i++) {
    if (comp2.includes(comp1[i])) {
      comp2 = comp2.replace(comp1[i], '.')
      res.add(comp1[i])
    }
  }

  if (res.size) {
    return Array.from(res).join('')
  }

  return null
  //console.log(y)
}

export default async () => {
  const demo = await (await qstring('inputs/p3.txt')).split('\r\n')

  console.log(sum(demo.map(findDuplicate)))

  const test2 = demo
  let ret = 0
  for (let i = 0; i < test2.length; i = i + 3) {
    const a = findBadge(test2[i], test2[i + 1])
    const b = findBadge(test2[i], test2[i + 2])

    ret += findDuplicate2(a, b)
  }
  console.log(ret)
}
