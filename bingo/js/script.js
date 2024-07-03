
let bingo=[];
let interacion1;
let interacion2;
let acumulador=0;
for(interacion1=0;interacion1<5;interacion1++){
  let interno=[];
  for(interacion2=0;interacion2<5;interacion2++){
acumulador=acumulador+1;
interno[interacion2]=acumulador*2}
bingo[interacion1]=interno; }
console.log(bingo);
for (interacion1=0;interacion1<5;interacion1++){
  for (interacion2=0;interacion2 <5;interacion2++)
  console.log (bingo[interacion1][interacion2]+ "");{}
console.log ("\n");} 
console.log("letra B\n");
for (interacion2=0;interacion2 <5;interacion2++){
  console.log(bingo[interacion2][0]+ "");}
console.log("letra I\n");
for (interacion2=0;interacion2 <5;interacion2++){
  console.log(bingo[interacion2][1]+ "");}
console.log("letra N\n");
for (interacion2=0;interacion2 <5;interacion2++){
  console.log(bingo[interacion2][2]+ "");}
console.log("letra G\n");
for (interacion2=0;interacion2 <5;interacion2++){
  console.log(bingo[interacion2][3]+ "");}
console.log("letra O\n");
for (interacion2=0;interacion2 <5;interacion2++){
  console.log(bingo[interacion2][4]+ "");
}

  for (let i = 0; i < 3; i++) {
    let line = "";
    for (let j = 0; j < 3; j++) {
        if (i === j || i + j === 3 - 1) {
            line += bingo[i][j] + " ";
        } else {
            line += "  ";
        }
    }
    console.log(line);
}
console.log("\n");
for (let i = 0; i < 3; i++) {
  let line = "";
  for (let j = 2; j < 5; j++) {
      if ((i+j === 2)|| (i+j === 4) || (i+j === 6)) {
          line += bingo[i][j] + " ";
      } else {
          line += "  ";
      }
  }
  console.log(line);
}
console.log("\n");
console.log("\n");
for (let i = 2; i <5 ; i++) {
let linea = "";
for (let j = 0; j < 3; j++) {
    if ((i+j === 2) || (i+j==4) || (i+j === 2)|| (i+j === 6)) {
        linea += bingo[i][j] + " ";
    } else {
        linea += "  ";
    }
}
console.log(linea);
}
console.log("\n");
