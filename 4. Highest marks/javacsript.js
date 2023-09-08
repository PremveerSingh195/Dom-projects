let marks = [67 , 56 , 34 , 98 ,78 ];
let highestmarks = marks [0];

for (let i = 1; i < marks.length ; i++){
    
     highestmarks = marks[i] > highestmarks ? marks[i] : highestmarks ;

}

console.log(highestmarks);
