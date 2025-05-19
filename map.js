//  map all function 

// const number = [1, 2, 3, 4, 5];

// const output = number.map((item)=>{
//     if(item !== 2){
//        return item;
//     }
// })

// console.log(output);  //  output : [1, undefined, 3, 4, 5]

// to remove undefined value we can use filter method


// const output = number.filter((item)=>{
//     if(item !== 2){
//        return item;
//     }
// })

// console.log(output);  //  output : [1, 3, 4, 5]





// const myuser = [
//     { name: 'shark', likes: 'ocean' },
//     { name: 'turtle', likes: 'pond' },
//     { name: 'otter', likes: 'fish biscuits' }
// ]

// const usersByLikes = myUsers.map(item => {
//     const container = {};

//     container[item.name] = item.likes;
//     container.age = item.name.length * 10;

//     return container;
// })

// const output = myuser.map((item)=>{
//     return (item.name+  " " + item.likes);   //proper answer 
//     return console.log(item.name+  " " + item.likes); //  it will add undefined 3 times every itrate it returns undefined

    
// })

// const output = myuser.map((item)=>{
//     const obj = {};
//     obj[item.name] = item.likes;
//     obj.age = item.name.length * 10;
//     return obj;
// })

// console.log(output);
// console.log(myuser);


// var myuser = [
//     { name: 'shark', likes: 'ocean' },
//     { name: 'turtle', likes: 'pond' },
//     { name: 'otter', likes: 'fish biscuits' }
// ];

// for (var i = 0; i < myuser.length; i++) {
//     console.log(myuser[i].name + " " + myuser[i].likes);
// }

// for (let i=0; i<myuser.length; i++){
//     console.log(myuser[i]);
//     console.log(myuser[i].name + " " + myuser[i].likes);

// }


// find method 
// const users = [
//   { name: 'shark', likes: 'ocean' },
//   { name: 'turtle', likes: 'pond' },
//   { name: 'otter', likes: 'fish biscuits' }
// ];

// const result = users.find((user)=> {
//   return user.name === 'otter';
// });

// console.log(result);


// reduce method 

// const numbers = [1, 2, 3, 4, 5];    

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// console.log(sum);  // output : 15



// sort array 

// const numbers = [1, 21, 3, 50, 5, 9];

// console.log(numbers.sort());


// without using sort method 

// for (let i=0; i<numbers.length; i++){
//     for(let j=i+1; j<numbers.length; j++){
//         if(numbers[i]>numbers[j]){
//             let temp= numbers[i];
//             numbers[i]= numbers[j]
//             numbers[j]= temp;
//         }
//     }
// }


// console.log(numbers);  // Output: [1, 3, 5, 9, 21, 50]


// next question is why we need to use two 2 for loop 

// answer is    we are using bubble sort algorithm   




const numbers = [1, 21, 3, 50, 5, 9];
let i = 0;

while (i < numbers.length - 1) {
    if (numbers[i] > numbers[i + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        i = 0; 
    } else {
        i++;
    }
}

console.log(numbers); // [1, 3, 5, 9, 21, 50]
