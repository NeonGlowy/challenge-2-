let mixed = [1, "apple", true, 42];
let firstNumber = mixed.find(item => typeof item === "number" && item > 10);
console.log(firstNumber); // 42
