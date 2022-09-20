// //? count artip azalacak
// //? miktar ve fiyat carpilip total artacak
// //? remove 0 iken display none olacak counter 1 oldugunda gelecek

// //*

// let vintageBackbagPrice = 25.98;
// let leviShoesPrice = 45.99;
// let antiqueClockPrice = 74.99;
// let count1 = 1;
// let count2 = 1;
// let count3 = 1;

// //* vintage backbag
// document.querySelector("#plus1").addEventListener("click", () => {
//   count1++;
//   console.log(count1);
//   document.querySelector("#count1").textContent = count1;
//   document.querySelector("#total1").textContent =
//     (vintageBackbagPrice * count1).toFixed(2) + " $";
// });
// document.querySelector("#minus1").addEventListener("click", () => {
//   if (count1 != 0) {
//     count1--;
//     console.log(count1);
//     document.querySelector("#count1").textContent = count1;
//     document.querySelector("#total1").textContent =
//       (vintageBackbagPrice * count1).toFixed(2) + " $";
//   }
// });
// //! remove vintage
// document.querySelector("#remove1").addEventListener("click", () => {
//   document.querySelector("#vintage").classList.add("d-none");
//   count1 = 0;
// });

// //* levi shoes
// document.querySelector("#plus2").addEventListener("click", () => {
//   count2++;
//   console.log(count2);
//   document.querySelector("#count2").textContent = count2;
//   document.querySelector("#total2").textContent =
//     (leviShoesPrice * count2).toFixed(2) + " $";
// });
// document.querySelector("#minus2").addEventListener("click", () => {
//   if (count2 != 0) {
//     count2--;
//     console.log(count2);
//     document.querySelector("#count2").textContent = count2;
//     document.querySelector("#total2").textContent =
//       (leviShoesPrice * count2).toFixed(2) + " $";
//   }
// });
// //! remove levi
// document.querySelector("#remove2").addEventListener("click", () => {
//   document.querySelector("#levi").classList.add("d-none");
//   count2 = 0;
// });
// //* antique clock
// document.querySelector("#plus3").addEventListener("click", () => {
//   count3++;
//   console.log(count3);
//   document.querySelector("#count3").textContent = count3;
//   document.querySelector("#total3").textContent =
//     (antiqueClockPrice * count3).toFixed(2) + " $";
// });
// document.querySelector("#minus3").addEventListener("click", () => {
//   if (count3 != 0) {
//     count3--;
//     console.log(count3);
//     document.querySelector("#count3").textContent = count3;
//     document.querySelector("#total3").textContent =
//       (antiqueClockPrice * count3).toFixed(2) + " $";
//   }
// });
// //! remove clock
// document.querySelector("#remove3").addEventListener("click", () => {
//   document.querySelector("#clock").classList.add("d-none");
//   count3 = 0;
// });

// //* subtotal

const tax = 0.18;
const shipping = 15;

document.querySelector(".products").onclick = (e) => {
  window.onload = () => {
    cartTotal();
  };
  if (e.target.className === "fas fa-minus") {
    if (e.target.parentElement.nextElementSibling.innerText > 1) {
      e.target.parentElement.nextElementSibling.innerText--;

      productTotal(
        e.target.parentElement.nextElementSibling.innerText,
        e.target.parentElement.parentElement.parentElement
      );
    } else {
      if (confirm("Produkt wird gelöscht?")) {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
        cartTotal();
      }
    }
  } else if (e.target.className === "fas fa-plus") {
    e.target.parentElement.previousElementSibling.innerText++;
    productTotal(
      e.target.parentElement.previousElementSibling.innerText,
      e.target.parentElement.parentElement.parentElement
    );
  } else if (e.target.className === "removeProduct") {
    e.target.parentElement.parentElement.parentElement.remove();
    cartTotal();
  }
};

let productTotal = (e, b) => {
  let productPrice =
    b.children[1].children[0].firstChild.nextElementSibling.innerText;
  let productTotal = b.children[4];

  //   console.log(productPrice.innerText, productTotal.innerText);
  let amount = e;
  productTotal.innerText = (productPrice * amount).toFixed(2);

  cartTotal();
};
let cartTotal = () => {
  let productTotalDivs = document.querySelectorAll(".productLinePrice");
  let subTotal = 0;
  productTotalDivs.forEach((e) => {
    subTotal += parseFloat(e.innerText);
  });
  let taxTotal = parseFloat(subTotal * tax).toFixed(2);
  let overallTotal = parseFloat(subTotal + taxTotal + shipping).toFixed(2);
  document.getElementById("subTotal").children[1].innerText =
    subTotal.toFixed(2);
  document.getElementById("tax").children[1].innerText = taxTotal;
  document.getElementById("shipping").children[1].innerText = subTotal
    ? shipping
    : 0;
  document.getElementById("overallTotal").children[1].innerText = overallTotal;
};
