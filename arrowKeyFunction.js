// little bit of notes 

// let add = (x, y)=>{
//     return x+y;
// }

// console.log(add(2, 78));

// let numbers = [4,2,6];
// numbers.sort((a,b) => a - b);
// console.log(numbers);

 // ARROW FUNCTIONS

//  let ninjaGreetings = name => console.log(`${name} hiiiiyaa`);

//  ninjaGreetings("mark");

// objects with arrow keys

// let ninja = {
//     name: "ryu",
//     chop(x){
//         setTimeout (()=> {
//             if (x > 0) {
//                 console.log(this.name  +` has chopped the enemy`);
//                 x--;
//                 ;
//             }
//         }, 1000)
//     }
// };

// ninja.chop(34);
        
const lunchMenu = (food) => {
    return `I am goin to eat ${food} for lunch`;
}

console.log(lunchMenu("eggs"));