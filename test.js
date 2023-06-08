function splitArray(array) {
    if (array.length > 1) {
        let splited = array.splice(0, array.length/2)
        //console.log(array)
        return splitArray(splited)
    } else {
        return array
    }
}