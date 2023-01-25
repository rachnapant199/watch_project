// SLIDER code
function prev() {
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next() {
  document.getElementById('slider-container').scrollLeft += 270;
}


// (".slide img").on("click", function () {
//   (this).toggleClass('zoomed');
//   (".overlay").toggleClass('active');
// })

// ---------------------------------------------------
// ---------------------------------------------------
// BAG PAGE

// 1.  AVAILABLE OFFERS show less
let show_more_less = document.getElementById("show_more_less");
console.log(show_more_less);
let offer_li = document.getElementsByClassName("offer-li");
console.log(offer_li);

show_more_less.addEventListener('click', ()=>{
    Array.from(offer_li).forEach(ele => {
    if(ele.style.display == "none"){
      ele.style.display = "block"
      show_more_less.innerHTML = `<p class="main_font">Show Less <i class="bi bi-caret-up-fill"></i></p>`
    }else{
      ele.style.display = "none"
      show_more_less.innerHTML = `<p class="main_font">Show More <i class="bi bi-caret-down-fill"></i></p>`
    }
  });
})


// 2. Coupons

let cop1 = document.getElementById("coupon1");
let cop2 = document.getElementById("coupon2");
let cop3 = document.getElementById("coupon3");
let cop4 = document.getElementById("coupon4");
let cop5 = document.getElementById("coupon5");
let apply = document.getElementById("coupon-appl");

console.log(cop1)
console.log(cop2)
console.log(cop3)
console.log(cop4)
console.log(cop4)

// event1 cop1
cop1.addEventListener('click', ()=>{
  apply.innerText = "-5%"
  tot_amt.innerText = tot_MRP-(tot_MRP*5)/100
})
// event2 cop2
cop2.addEventListener('click', ()=>{
  apply.innerText = "-10%"
  tot_amt.innerText = tot_MRP-(tot_MRP*10)/100
})
// event3 cop3
cop3.addEventListener('click', ()=>{
  apply.innerText = "-15%"
  tot_amt.innerText = tot_MRP-(tot_MRP*15)/100
})
// event4 cop4
cop4.addEventListener('click', ()=>{
  apply.innerText = "-500"
  tot_amt.innerText = tot_MRP-500
})
// event4 cop5
cop5.addEventListener('click', ()=>{
  apply.innerText = "-1000"
  tot_amt.innerText = tot_MRP-1000
})


// 3. AMOUNT CALCULATOR with quantity
let plus1 = document.getElementById("plus1");
let minus1 = document.getElementById("minus1");

let plus2 = document.getElementById("plus2");
let minus2 = document.getElementById("minus2");

let qty1 = document.getElementById("qty1");
let qty2 = document.getElementById("qty2");

let price1 = document.getElementById("price-per-pro1");
let price2 = document.getElementById("price-per-pro2");

let tot_mrp = document.getElementById("tot-mrp");
let tot_amt = document.getElementById("tot-amt");


// console.log("plus1: ", plus1)
// console.log("minus1: ", minus1)

// console.log("plus2: ", plus2)
// console.log("minus2: ", minus2)

// console.log("qty1: ", qty1)
// console.log("qty2: ", qty2)

// console.log("price1: ", price1)
// console.log("price2: ", price2)

// console.log("tot_mrp: ", tot_mrp)
// console.log("tot_amt:", tot_mrp)


// 1st product event
let add1
add1 = 1;
let less1;
const base_value1 = parseFloat(price1.innerHTML);
let price1_change = base_value1;

tot_mrp.innerText = parseInt(price1.innerText) + parseInt(price2.innerText);
let tot_MRP = parseInt(tot_mrp.innerText);

tot_amt.innerText = tot_mrp.innerText;

plus1.addEventListener("click", () => {
  add1++;
  less1 = add1;
  qty1.innerText = `${add1}`;
  price1_change += base_value1
  price1.innerText = price1_change

  tot_MRP+=base_value1
  tot_mrp.innerText = tot_MRP
  tot_amt.innerText = tot_MRP
});
minus1.addEventListener("click", () => {
  if (parseInt(qty1.innerText) > 1) {
    less1--;
    add1 = less1
    price1_change -= base_value1
    price1.innerText = price1_change

    tot_MRP-=base_value1
    tot_mrp.innerText = tot_MRP
    tot_amt.innerText = tot_MRP

  } else if (parseInt(qty1.innerText) == 1) {
    less1 = 1;
  }
  qty1.innerText = `${less1}`;
});



// -------------------------------
// 2nd product event
let add2
add2 = 1;
let less2;
const base_value2 = parseFloat(price2.innerHTML);
let price2_change = base_value2;


plus2.addEventListener("click", () => {
  add2++;
  less2 = add2;
  qty2.innerText = `${add2}`;
  price2_change += base_value2
  price2.innerText = price2_change

  tot_MRP+=base_value2
  tot_mrp.innerText = tot_MRP
  tot_amt.innerText = tot_MRP

});
minus2.addEventListener("click", () => {
  if (parseInt(qty2.innerText) > 1) {
    less2--;
    add2 = less2
    price2_change -= base_value2
    price2.innerText = price2_change

    tot_MRP-=base_value2
    tot_mrp.innerText = tot_MRP
    tot_amt.innerText = tot_MRP

  } else if (parseInt(qty2.innerText) == 1) {
    less2 = 1;
  }
  qty2.innerText = `${less2}`;
});


// tot_mrp.innerText = parseInt(price1.innerText) + parseInt(price2.innerText)