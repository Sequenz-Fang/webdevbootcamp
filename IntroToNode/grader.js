function average(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return Math.round(sum/array.length);
}
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));