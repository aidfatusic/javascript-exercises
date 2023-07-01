const removeFromArray = function(array, toDelete1, toDelete2, toDelete3, toDelete4) {
    for(let i = 0; i < array.length; i++){
        if(toDelete1 === array[i] || toDelete2 === array[i] || toDelete3 === array[i] || toDelete4=== array[i]){
            array.splice(i,1);
            i = -1;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
