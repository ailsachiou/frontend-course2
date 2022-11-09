// 三角形

// 在五角學院學的
for (let i = 1; i <= 12; i++) {
  console.log("*".repeat(i));
}

// 查到換行的方式\n
let str = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 0; j < i; j++) {
    str += "*";
    console.log(str);
  }
  i += "\n";
}
