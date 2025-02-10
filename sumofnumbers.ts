function sumFor(numList:number[]) {
  let total = 0;
  for (let i = 0; numList.length; i++) {
    total += numList[i];
  }
  return total;
}

function sumWhile(numList:number[]) {
  let i = 0;
  let total = 0;
  while (numList[i] !== numList[numList.length - 1]) {
    total += numList[i];
    i++;
  }
  return total;
}

function sumRecursion(numList: number[]):number {
  if (numList.length === 0) {
    return 0;
  }
  return numList[0] + sumRecursion(numList.slice(1));
}

function sumTheFunctionalWay(numList: number[]):number {
  return numList.reduce((acc, cur) => acc + cur);
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
