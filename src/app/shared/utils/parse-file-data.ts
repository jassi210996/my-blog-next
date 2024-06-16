/**
 * parse file data
 * @param file file string
 * @returns 
 */
function parseFileData(file: string) {
  const lines = file.split("\n");
  let acc: Record<string, unknown> = {};
  const values = lines.reduce((acc, line) => {
    const match = line.match(/# (\w+): (.*)/);
    if (match) {
      const key = match[1];
      acc[key] = match[2];
    }
    return acc;
  }, acc);
  return values;
}

export default parseFileData;
