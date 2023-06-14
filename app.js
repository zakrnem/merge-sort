function merge(left, right) {
    let sortedArray = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArray.push(left.shift())
      } else {
        sortedArray.push(right.shift())
      }
    }

    return [...sortedArray, ...left, ...right]
}

function mergeSort(array) {
    if (array.length <= 1) return array
    let mid = Math.floor(array.length / 2)
    
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))

    return merge(left, right)
}

function test() {
    return mergeSort([7, 2, 6, 9, 3, 5, 1, 8])
}

module.exports = {
    z: mergeSort,
    y: test
};