let value = document.getElementById("count").innerHTML;
let count = 0;  
setTimeout(() => {
  let counter = setInterval(() => {
    //   console.log(count++);
    count++;
    document.getElementById("count").innerHTML = count;
    if (count == value) {
      // clearInterval(counter);
      count = 0;
    }
  }, 100);
}, 2000);

let value2 = document.getElementById("count2").innerHTML;
setTimeout(() => {
  let counter = setInterval(() => {
    //   console.log(count++);
    count++;
    document.getElementById("count2").innerHTML = count;
    if (count == value2) {
      // clearInterval(counter);
      clearInterval(counter);
      count = 0;
    }
  }, 100);
}, 2000);
let value3 = document.getElementById("count3").innerHTML;
setTimeout(() => {
  let counter = setInterval(() => {
    //   console.log(count++);
    count++;
    document.getElementById("count3").innerHTML = count;
    if (count == value3) {
      // clearInterval(counter);
      count = 0;
    }
  }, 100);
}, 2000);
let value4 = document.getElementById("count4").innerHTML;
setTimeout(() => {
  let counter = setInterval(() => {
    //   console.log(count++);
    count++;
    document.getElementById("count4").innerHTML = count;
    if (count == value4) {
      // clearInterval(counter);
      count = 0;
    }
  }, 100);
}, 2000);
