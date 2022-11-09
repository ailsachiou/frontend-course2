// 奇數或偶數，給定一個數，並判斷此數為奇數或偶數
let number = 8.9;
// 方法一
if (number / 2 === 0) {
  console.log("輸入的數字", number, "是偶數");
} else {
  console.log("輸入的數字", number, "是奇數");
}
// 方法二
const oddOrEvenNumber = number / 2 === 0 ? "是偶數" : "是奇數";
console.log(oddOrEvenNumber);
