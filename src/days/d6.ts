import { sum } from '../helper/math.js'
import { qstring } from '../helper/readfile.js'

const toRemove = (chars: string[], num: number) =>
  chars.filter((_, i) => i >= num)

export default async () => {
  const enc = await await qstring('inputs/p6.txt')

  for (let x = 0; x < 2; x++) {
    let chars = [enc[0]]
    let num = x === 0 ? 3 : 13
    for (let i = 1; i < enc.length; i++) {
      const c = enc[i]
      const pos = chars.indexOf(c)
      if (pos !== -1) {
        chars = toRemove(chars, pos + 1)
      }

      if (chars.length === num) {
        console.log(i + 1)
        break
      }

      chars.push(c)

      if (chars.length > num) {
        chars = chars.filter((_, i) => i >= 1)
      }
    }
  }
}
