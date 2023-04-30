let arr = [2,3,4,5,6,5,4,1,3];
function removeDublicates(arr){
    return[...new Set(arr)];
}
console.log(removeDublicates(arr));