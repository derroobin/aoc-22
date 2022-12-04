import { sum } from '../helper/math.js'
import { qstring } from '../helper/readfile.js'

export default async () => {
  const demo = await (await qstring('inputs/p4.txt')).split('\r\n')

  const a = sum(
    demo.map((m) => {
      const q = m.split(',')
      const [a, b] = q[0].split('-').map((x) => parseInt(x))
      const [x, y] = q[1].split('-').map((x) => parseInt(x))
      if (a >= x && b <= y) {
        return 1
      }
      if (x >= a && y <= b) return 1
      return 0
    })
  )
  console.log(a)

  console.log(
    sum(
      demo.map((m) => {
        const q = m.split(',')
        const [a, b] = q[0].split('-').map((x) => parseInt(x))
        const [x, y] = q[1].split('-').map((x) => parseInt(x))

        if (a >= x && b <= y) {
          return 1
        }
        if (x >= a && y <= b) return 1

        if (a === y || b === x) return 1

        if (b >= x && b <= y) return 1
        if (a >= x && a <= y) return 1
        console.log(a, b, x, y)
        return 0
      })
    )
  )
}
