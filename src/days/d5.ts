import { sum } from '../helper/math.js'
import { qstring } from '../helper/readfile.js'

export default async () => {
  const [boxes, moves] = await (
    await qstring('inputs/p5.txt')
  ).split('\r\n\r\n')
  const b: Array<Array<string>> = []

  boxes
    .split('\r\n')
    .filter((_, i, a) => a.length - 1 > i)
    .forEach((x) => {
      for (let i = 1; i < x.length; i += 4) {
        const c = x[i]
        if (c !== ' ') {
          const index = Math.floor(i / 4)
          if (!b[index]) {
            b[index] = new Array()
          }
          b[index].push(c)
        }
      }
    })

  const c = JSON.parse(JSON.stringify(b)) as Array<Array<string>>

  moves
    .trim()
    .split('\r\n')
    .forEach((command) => {
      const [_, amount, __, outF, ___, outT] = command
        .split(' ')
        .map((x) => parseInt(x))

      const from = outF - 1
      const to = outT - 1
      for (let i = 0; i < amount; i++) {
        const [box, ...stackF] = b[from]
        if (box) {
          const stackT = [box, ...b[to]]
          b[from] = stackF
          b[to] = stackT
        }
      }
    })
  console.log(
    b
      .map((t) => {
        const [v] = [...t]
        return v || ''
      })
      .join('')
  )

  moves.split('\r\n').forEach((command) => {
    const [_, amount, __, outF, ___, outT] = command
      .split(' ')
      .map((x) => parseInt(x))

    const from = outF - 1
    const to = outT - 1

    const boxes = c[from].slice(0, amount)
    const rest = c[from].slice(amount)
    c[to] = [...boxes, ...c[to]]
    c[from] = rest
  })

  console.log(
    c
      .map((t) => {
        const [v] = [...t]
        return v || ''
      })
      .join('')
  )
}
