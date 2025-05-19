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


var myuser = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
];

// for (var i = 0; i < myuser.length; i++) {
//     console.log(myuser[i].name + " " + myuser[i].likes);
// }

for (let i=0; i<myuser.length; i++){
    console.log(myuser[i]);
    console.log(myuser[i].name + " " + myuser[i].likes);

}