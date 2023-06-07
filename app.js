function sortArray(array) {
    let sortedArray = []
    if (array.length === 2) {
        if (array[0] < array[1]) {
            sortedArray.push(array[0])
            sortedArray.push(array[1])
            return sortedArray
        } else {
            sortedArray.push(array[1])
            sortedArray.push(array[0])
            return sortedArray
        }
    }
    if (array.length === 1) {
        return array
    }
}

function mergeLogic(index, tempArray) {
    let sortedArray = []
    sortedArray.push(tempArray[index])
    tempArray.splice(index,1)
    tempArray = sortArray(tempArray)
    return sortedArray.concat(tempArray)
}

function mergeIfStep(tempArray, sortedArray, arrayItem) {
    tempArray.push(arrayItem)
    sortedArray = tempArray.concat(sortedArray)
    return sortedArray
}

function mergeElseStep(tempArray, sortedArray, arrayItem) {
    tempArray.push(arrayItem)
    sortedArray.splice(0,1)
    return tempArray
}

function mergeSort(array, sortedArray) {
    let startIndex
    let tempArray = []

    if (sortedArray !== undefined) {
        tempArray = sortedArray.concat(array)
        startIndex = sortedArray.length-1
    } else {
        startIndex = 0
    }

    if (array.length === 1 && sortedArray !== undefined) {
        tempArray = []
        if (array[0] < sortedArray[0]) {
            return mergeIfStep(tempArray, sortedArray, array[0])
        } else {
            tempArray = mergeElseStep(tempArray, sortedArray, sortedArray[0])

            if (array[0] < sortedArray[0]) {
                return mergeIfStep(tempArray, sortedArray, array[0])
            } else {
                tempArray = mergeElseStep(tempArray, sortedArray, sortedArray[0])

                if (array[0] < sortedArray[0]) {
                    return mergeIfStep(tempArray, sortedArray, array[0])
                } else {
                    tempArray = mergeElseStep(tempArray, sortedArray, sortedArray[0])
                    return mergeIfStep(tempArray, sortedArray, array[0])
                }
            }
        }
    }

    if (array.length === 1 && sortedArray === undefined) {
        return array
    }    
    if (array.length > 1) {
        let leftArray = array.splice(startIndex,1)
        let rightArray = array.splice(startIndex, 2)
        tempArray = leftArray.concat(sortArray(rightArray))
        sortedArray = (tempArray[0] < tempArray[1]) ? mergeLogic(0, tempArray) : mergeLogic(1, tempArray)

        if (array.length === startIndex) {
            //console.log('Line 79 ', array)
            return sortedArray
        } else {
            //console.log('Line 82 ', array)
            return mergeSort(array, sortedArray)
        }
    }
    if (array.length < 1) {
        return 'ERROR: Array has no elements'
    }
}


module.exports = {
    z: mergeSort
};