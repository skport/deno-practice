import { parse } from "https://deno.land/std@0.173.0/flags/mod.ts";

const parsedArgs = parse(Deno.args);

let a = 0
let operator = ''
for (const i of parsedArgs._) {
  if (i == '+' || i == '-' || i == 'x' || i == '/') {
    operator = i
  } else {
    if (isNaN(+i)) {
      throw new Error('Non-numeric characters found in parameters.');
    }
    if (operator == '+') {
      a += +i
    } else if (operator == '-') {
      a -= +i
    } else if (operator == 'x') {
      a *= +i
    } else if (operator == '/') {
      a /= +i
    } else {
      a += +i
    }
    operator = ''
  }  
}
console.log(a)