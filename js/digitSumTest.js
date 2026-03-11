import { digitSum } from "./fuggveny.js";

function digitSumTest() {
  let n = 123;
  let eredmeny = digitSum(n);
  console.assert(eredmeny === 6, ` n=${n}, elvárt=6, kapott=${eredmeny}`);
}

digitSumTest();

function digitSumListTest() {
  const testEsetlista = [
    { n: 123, vart: 6, szoveg: "A számjegyek összege az elvárt" },
    { n: 0, vart: 0, szoveg: "A számjegyek összege 0" },
    { n: 7, vart: 7, szoveg: "A számjegyek összege egyjegyű számnál önmaga" },
    {
      n: 58976415897641,
      vart: 80,
      szoveg: "A számjegyek összeadása nagy számnál is működik",
    },
    { n: -20, vart: 0, szoveg: "A ciklus nem fut le, és 0 a visszatérés" },
  ];
  for (let i = 0; i < testEsetlista.length; i++) {
    let eredmeny = digitSum(testEsetlista[i].n);
    console.assert(
      eredmeny === testEsetlista[i].vart,
      ` n=${testEsetlista[i].n}, elvárt=${testEsetlista[i].vart}, kapott=${eredmeny}`,
      testEsetlista[i].szoveg,
    );
  }
}

digitSumListTest();
