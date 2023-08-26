const rand = (n) => 0 | (Math.random() * n)

const swap = <T>(t: Array<T>, i: number, j: number) => {
  const q = t[i]
  t[i] = t[j]
  t[j] = q
  return t
}

const shuffle = <T>(t: Array<T>) => {
  let last = t.length
  let n
  while (last > 0) {
    n = rand(last)
    swap(t, n, --last)
  }
}

export const generatePairs = (maxRange: number, pairCount: number): Array<Array<number>> => {
  const results: Array<Array<number>> = []
  const existing: Array<number> = []

  const backTrack = (start: number) => {
    if (existing.length === pairCount) {
      const pair = [...existing]
      shuffle(pair)
      results.push(pair)
      return
    }
    for (let i = start; i <= maxRange; i++) {
      existing.push(i)
      backTrack(i + 1)
      existing.pop()
    }
  }

  backTrack(1)
  shuffle(results)
  return results
}
