import { qstring } from "../helper/readfile.js";

const convert = (a: string) => {
  if (a === "C" || a === "Z") return 0; // Scissor
  if (a === "A" || a === "X") return 1; // Rock
  if (a === "B" || a === "Y") return 2; // Paper
};

const part2 = (x: string) => {
  const [a, b] = x.split(" ");
  if (!a || !b) {
    console.log("fehlerhaft", x);
    return 0;
  }
  const y = convert(a);
  const z = (convert(b) + 1 + y) % 3;

  const next = (y + 1) % 3;

  const winner = z === y ? 3 : next === z ? 6 : 0;

  return (z === 0 ? 3 : z) + winner;
};

const part1 = (x: string) => {
  const [a, b] = x.split(" ");
  if (!a || !b) {
    return 0;
  }
  const y = convert(a);
  const z = convert(b);

  const next = (y + 1) % 3;

  const winner = z === y ? 3 : next === z ? 6 : 0;

  return (z === 0 ? 3 : z) + winner;
};

export default async () => {
  console.log(["A Y", "B X", "C Z"].map(part2));
  const s = await (
    await qstring("inputs/p2.txt")
  )
    .split("\r\n")
    .map(part1)
    .reduce((p, c) => p + c, 0);
  console.log(s);
};
