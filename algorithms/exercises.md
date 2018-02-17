# Exercise I
**a**. O(N^3^)
**b**. O(log(N))  Any time the power of N is less than 1 (here 0.5) it's called logrithmic.
**c**. O(N)  N^1.5^ rounded down to N 
**d**. O(N)  N^1.5^ rounded down to N 
**e**. O(N^3^) 2 nested loops time 9 maps to N^3^
**f**. O(N) N recursions - the fact that a large N could create a stack overflow is irrelivant 
**g**. O(N) N recursions

# Exercise IIcd 
**a**
```
function largestDifference(arr) {
let min = Number.MAX_SAFE_INTEGER;
 return arr.reduce((d,n,index) => {
   if (index == arr.length - 1) {
     if (n - min > d) 
      d = n - min
     return d
   }

    if (arr[index + 1] < n)
    {
      if (n - min > d)
        d = n - min
      
    } else if ( n < min) {
        min = n
    }

   
   return d
 },0); 
}
```
**b**
```
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function findFloor() {
  let n = 0;
  while (n < 3)
    n = getRandomInt(100);
  let f = 0;
  while (f === 0)
    f = getRandomInt(n);

  function isBroken(i) {
    return i > f;
  }

  let floor = -1;
  let i = Math.ceil(n / 2);
  let lower = n;
  let higher = 0;

  while (floor < 0) {
    const iB = isBroken(i);
    if (!iB) {
      const iB1 = isBroken(i + 1);
      if (iB1) {
        floor = i;
        continue;
      }
      else {
        higher = i + 1;
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
  }
  return floor == f;
}

````


