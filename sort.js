function sort(frames) {

  // find the max frame number
  let maxFrame = 0
  for (let i = 0; i < frames.length; i++) {
    if (frames[i] > maxFrame) {
      maxFrame = frames[i]
    }
  }

  const frameSet = new Set(frames)

  const gaps = []
  let longestGap = null
  let longestGapSize = 0
  let missingCount = 0

  let start = null

  // iterate from 1 to maxFrame
  // and find the missing frames
  for (let i = 1; i <= maxFrame; i++) {
    if (!frameSet.has(i)) {
      if (start === null) {
        start = i
      }
      missingCount++
    } else {
      if (start !== null) {
        let end = i - 1
        gaps.push([start, end])

        let gapSize = end - start + 1
        if (gapSize > longestGapSize) {
          longestGapSize = gapSize
          longestGap = [start, end]
        }

        start = null
      }
    }
  }


  if (gaps.length === 0) {
    return {
      message: "theres no missing frames",
    }
  }

  return {
    gaps,
    longest_gap: longestGap,
    missing_count: missingCount
  }
}

console.log(sort([1, 2, 3, 5, 6, 10, 11, 16]))

