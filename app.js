//? count artip azalacak
//? miktar ve fiyat carpilip total artacak
//? remove 0 iken display none olacak counter 1 oldugunda gelecek

//*

let vintageBackbagPrice = 25.98;
let leviShoesPrice = 45.99;
let antiqueClockPrice = 74.99;
let count1 = 1;
let count2 = 1;
let count3 = 1;

//* vintage backbag
document.querySelector("#plus1").addEventListener("click", () => {
  count1++;
  console.log(count1);
  document.querySelector("#count1").textContent = count1;
  document.querySelector("#total1").textContent = (
    vintageBackbagPrice * count1
  ).toFixed(2);
});
document.querySelector("#minus1").addEventListener("click", () => {
  if (count1 != 0) {
    count1--;
    console.log(count1);
    document.querySelector("#count1").textContent = count1;
    document.querySelector("#total1").textContent = (
      vintageBackbagPrice * count1
    ).toFixed(2);
  }
});
//! remove vintage
document.querySelector("#remove1").addEventListener("click", () => {
  document.querySelector("#vintage").classList.add("d-none");
  count1 = 0;
});

//* levi shoes
document.querySelector("#plus2").addEventListener("click", () => {
  count1++;
  console.log(count2);
  document.querySelector("#count2").textContent = count2;
  document.querySelector("#total2").textContent = (
    leviShoesPrice * count2
  ).toFixed(2);
});
document.querySelector("#minus2").addEventListener("click", () => {
  if (count2 != 0) {
    count2--;
    console.log(count2);
    document.querySelector("#count2").textContent = count2;
    document.querySelector("#total2").textContent = (
      leviShoesPrice * count2
    ).toFixed(2);
  }
});
//! remove levi
document.querySelector("#remove2").addEventListener("click", () => {
  document.querySelector("#levi").classList.add("d-none");
  count2 = 0;
});
//* antique clock
document.querySelector("#plus3").addEventListener("click", () => {
  count3++;
  console.log(count3);
  document.querySelector("#count3").textContent = count3;
  document.querySelector("#total3").textContent = (
    antiqueClockPrice * count3
  ).toFixed(2);
});
document.querySelector("#minus3").addEventListener("click", () => {
  if (count3 != 0) {
    count3--;
    console.log(count3);
    document.querySelector("#count3").textContent = count3;
    document.querySelector("#total3").textContent = (
      antiqueClockPrice * count3
    ).toFixed(2);
  }
});
//! remove clock
document.querySelector("#remove3").addEventListener("click", () => {
  document.querySelector("#clock").classList.add("d-none");
  count3 = 0;
});
