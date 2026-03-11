import { lnko, digitSum } from "./fuggveny.js";

/* két egész szám leg nagyobb közös osztolyát adja vissza*/
//bemenet 2 egész szám kimenet egy szám
let eredmeny = lnko(18, 3);
console.log(eredmeny);

/* Egy szám számjegyeinek összegét adja vissza*/
//bemenet 1 egész szám kimenet egy szám
let eredmeny2 = digitSum(1234);
console.log(eredmeny2);
