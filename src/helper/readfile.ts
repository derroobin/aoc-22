import fs from "fs/promises"

export const qfs = async (filepath: string) => {
  return fs.readFile(filepath)
};


export const qstring = async (filepath: string) => {
  return (await qfs(filepath)).toString()
}