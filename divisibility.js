let arr = [3,4,5,6,7,8,9,35,23,56,78];
for(let i=0;i<arr.length;i++){
    if((i%3==0)&&(i%2==0)){
        continue;
    }
    if(i%3==0){
        console.log(arr[i]);
    }
}