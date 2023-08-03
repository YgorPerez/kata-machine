export default function bs_list(haystack: number[], needle: number): boolean {
  let lowPoint = 0
  let highPoint = haystack.length
  do {
    const middlePoint = Math.floor(lowPoint + (highPoint - lowPoint) / 2)
    const currentValue = haystack[middlePoint]
    if (currentValue === needle) {
      return true
    } else if (currentValue > needle) {
      highPoint = middlePoint
    } else {
      lowPoint = middlePoint + 1
    }
  } while(lowPoint < highPoint)
  return false
}
