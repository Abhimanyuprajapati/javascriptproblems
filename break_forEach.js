// for each loop

const arrayone = [1,5,6,9,2,7];

try{
    arrayone.forEach((item,index)=>{
        // console.log("item", item);
        if(item==2){
            throw new Error();
        }
          console.log("item", item);
    })
}catch(error){
    console.log(error);
}

// output

1
5
6
9
Error



// forEach does not allow break , continue  or return 
// we also can not use async/await 