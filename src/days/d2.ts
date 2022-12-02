import { qstring } from '../helper/readfile.js'
import { sum } from '../helper/math.js'

const convert = (a: string) => {
  if (a === 'C' || a === 'Z') return 0 // Scissor
  if (a === 'A' || a === 'X') return 1 // Rock
  if (a === 'B' || a === 'Y') return 2 // Paper
}

const points = (y: number, z: number) => {
  const next = (y + 1) % 3

  const winner = z === y ? 3 : next === z ? 6 : 0

  return (z === 0 ? 3 : z) + winner
}

const part2 = (x: string) => {
  const [a, b] = x.split(' ')

  const y = convert(a)
  const z = (convert(b) + 1 + y) % 3
  return points(y, z)
}

const part1 = (x: string) => {
  const [a, b] = x.split(' ')

  const y = convert(a)
  const z = convert(b)
  return points(y, z)
}

export default async () => {
  const strs = await (await qstring('inputs/p2.txt')).split('\r\n')

  console.log(sum(strs.map(part1)))
  console.log(sum(strs.map(part2)))
}
