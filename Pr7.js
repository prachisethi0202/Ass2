let arr=[1,11,111,222,555]
console.log(arr)
console.log(arr.length);
let sum=0;
arr.forEach(num => {
    sum+=num
});
average=sum/arr.length;
console.log(average);