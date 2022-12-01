import { qstring } from "../helper/readfile.js";
export default async () => {
  const str = (await qstring("inputs/p1.txt"))
    .split("\r\n\r\n")
    .map((x) =>
      x
        .split("\r\n")
        .map((t) => parseInt(t))
        .reduce((prev, cur) => prev + cur, 0)
    )
    .sort((a, b) => b - a);
  let max = 0;
  console.log(str[0]);
  console.log(str[0] + str[1] + str[2]);

};
