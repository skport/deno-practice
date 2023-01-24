import { parse } from "https://deno.land/std@0.173.0/flags/mod.ts";

const parsedArgs = parse(Deno.args);

let a = 0
for (const i of parsedArgs._) {
  if (isNaN(+i)) {
    throw new Error("Non-numeric characters found in parameters.");
  }
  a += +i
}
console.log(a)