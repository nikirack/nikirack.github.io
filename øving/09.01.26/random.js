let folk = ["Jonas", "Ole", "Per", "Peder", "Kalvin", "Person", "Ben", "Tom", "Ter", "Jonis"];
// let temp = [];
let personer = [];

// for (let index = 0; index < 2; index++) {
//     temp = [];

//     person = Math.floor(Math.random() * folk.length);
//     personer.push(folk[person]);
//     folk.forEach(a => {
//         if (a != folk[person]) {
//             temp.push(a);
//         }
//     });
//     folk = [...temp];
// }

for (let index = 0; index < 2; index++) {
    person = Math.floor(Math.random() * folk.length);
    personer.push(folk[person]);
    folk.splice(person, 1)
}

console.table(personer);
// console.table(folk)