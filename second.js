function sortArray(array) {
    let sortedArray = []

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

function mergeLogic(leftArray, rightArray, sortedArray) {    
    if ((leftArray.length > 0) || (rightArray.length > 0)) {
        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray[0])
            leftArray.splice(0,1)
            //console.log(sortedArray, leftArray, rightArray)
            return mergeLogic(leftArray, rightArray, sortedArray)
        } else {
            sortedArray.push(rightArray[0])
            rightArray.splice(0,1)
            //console.log(sortedArray, leftArray, rightArray)
            return mergeLogic(leftArray, rightArray, sortedArray)
        }
    } else {
        return sortedArray
    }
}



function mergeSort(array) {
    let leftArray = array.splice(0, array.length/2)
    let rightArray = array
    let sortedArray = []

    if (leftArray.length === 2) {
        let sortedLeft = sortArray(leftArray)
        let sortedRight = sortArray(rightArray)
        //console.log(sortedLeft, sortedRight)
        return mergeLogic(sortedLeft, sortedRight, sortedArray)
    } else {
        return mergeSort(array)
    }
}


module.exports = {
    z: mergeSort
};