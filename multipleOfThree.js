// write a function that is multiple of three 

function multipleofthree(begin, end){
for(let i=begin; i<=end; i++){
    if(i%3==0){
        console.log(i);
    }
}
}

console.log(multipleofthree(5,20));