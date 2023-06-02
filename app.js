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
}

function mergeSortLogic(index, tempArray) {
    let sortedArray = []
    sortedArray.push(tempArray[index])
    tempArray.splice(index,1)
    tempArray = sortArray(tempArray)
    return sortedArray.concat(tempArray)
}

function mergeSort(array) {
    if (array.length > 3) {
        //
    }
    if (array.length === 3) {
        let leftArray = array.splice(0,1)
        let rightArray = array.splice(0, 2)
        let tempArray = leftArray.concat(sortArray(rightArray))
        let sortedArray = (tempArray[0] < tempArray[1]) ? mergeSortLogic(0, tempArray) : mergeSortLogic(1, tempArray)
        return sortedArray
    } 
    if (array.length === 2) {
        return sortArray(array)
    }
    if (array.length < 1) {
        return 'ERROR: Array has no elements'
    }
}


module.exports = {
    z: mergeSort
};

/*
function mergeSort(array) {
    if (array.length > 1) {
        if (array.length > 2) {
            let leftArray = array.splice(0,1)
            let rightArray = array.splice(0, 2)
            let tempArray = leftArray.concat(sortArray(rightArray))
            
            let sortedArray = (tempArray[0] < tempArray[1]) ? mergeSortLogic(0, tempArray) : mergeSortLogic(1, tempArray)
            return sortedArray
        } else { //array.length === 2
            return sortArray(array)
        }
    } else { //array.length === 0
        return 'ERROR: Array has no elements'
    }
}
*/