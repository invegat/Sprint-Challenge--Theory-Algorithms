function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const maxSteps = 1000;
let run;
for (run = 0; run < maxSteps; run++) {
  if ((run % 100) == 0) console.log(`run: ${run}`);
  if (!findFloor()) break;
}
console.log(`success: ${run === maxSteps}`);
function findFloor() {
  let n = 0;
  while (n < 3)
    n = getRandomInt(100);
  let f = 0;
  while (f === 0)
    f = getRandomInt(n);
  // n = 83;
  // f = 31;
  function isBroken(i) {
    return i > f;
  }

  let floor = -1;
  let i = Math.ceil(n / 2);
  let lower = n;
  let higher = 0;
  let steps = 0
  while (floor < 0) {
    if (steps++ > maxSteps) {
      // console.log(`i: ${i} f: ${f} n: ${n}  higher: ${higher}  lower: ${lower}`);
      break;
    }
    const iB = isBroken(i);
    if (!iB) {
      const iB1 = isBroken(i + 1);
      // console.log(`iB1: ${iB1}`)
      if (iB1) {
        floor = i;
        continue;
      }
      else {
        higher = i + 1;
        // console.log(`higher: ${higher}`);
      }
    }
    else {
      lower = i;
    }
    if (lower - higher == 1) {
      floor = higher;
      continue;
    }
    i = Math.ceil((lower - higher) / 2) + higher;
    // console.log(`i: ${i}`);
  }
  return floor == f;
}
