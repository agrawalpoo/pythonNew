// Get the modal
var modal = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function(){

    // slider section
$('#owl-slider1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
     "<i class='fa fa-angle-left'</i>",
     "<i class='fa fa-angle-right'</i>"
    ],
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true
        }
    }
});
// work done by us section
$('#owl-slider2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }       
    }
});
// work container background color
$("#work-container").css("background-color","#D5F5E3");
});

// add to cart number on homw screen
 
var a = document.querySelector("#numofcart");

function numcart(){

  let count = 0;
   carts.forEach((item)=>{
     count+=item.numberofunits;
   });
   a.innerHTML=count;
   if(count==0)
   {
     a.style.display ="none";
   }
   else
   {
     a.style.display ="block";
   }
}









// Home page product section 
const productE1 = document.querySelector ("#renderproduct");
// product page sections
const productIndoor = document.querySelector ("#indoorplant");
const productOutdoor = document.querySelector ("#outdoorplant");
const productFlower = document.querySelector ("#flower");
const productSeasonalflower = document.querySelector ("#seasonalflower");
// cart page
const cartproductE1 = document.querySelector("#cart-product");
const totalitemE1 = document.querySelector("#total-item");
const totalpriceE1 = document.querySelector("#total-price");
// const cartitem = document.querySelector("cart-item");

// show function of palnt
function showproducts(){

    products.forEach((product) => {
      productE1.innerHTML +=`
      <div class="col-6 col-md-4 d-flex justify-content-center">
      <div class="card mx-auto" style="width: 15rem">
        <img src="${product.imgsrc}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text"><i class="fa fa-inr"></i>&nbsp;${product.price}</p>
          <a href="product.html#renderproduct" class="btn btn-primary mt-1" onclick="addtocart(${product.id})">Add to cart</a>
          <a href="payment.html" class="btn btn-primary mt-1">Buy Now</a>
        </div>
      </div>
    </div>`
    }); 
}
showproducts();
// product section for indoorplant

function showIndoorProducts(){
indoorplant.forEach((product) => {
  productIndoor.innerHTML += `
    <div class="col-6 col-md-4 d-flex justify-content-center">
        <div class="card mx-auto" style="width: 15rem">
         <img src="${product.imgsrc}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text"><i class="fa fa-inr"></i>&nbsp;${product.price}</p>
          <a href="product.html#indoorplant" class="btn btn-primary mt-1"  onclick="addtocart(${product.id})">Add to cart</a>
          <a href="payment.html" class="btn btn-primary mt-1">Buy Now</a>
        </div>
      </div>
    </div>`
    }); 
}
showIndoorProducts();
// product section for outdoorplant
function showoutdoorProducts(){
    outdoorplant.forEach((outdoorproduct) => {
        productOutdoor.innerHTML +=`
      <div class="col-6 col-md-4 d-flex justify-content-center">
      <div class="card mx-auto" style="width: 15rem">
        <img src="${outdoorproduct.imgsrc}" class="card-img-top" alt="${outdoorproduct.name}" />
        <div class="card-body">
          <h5 class="card-title">${outdoorproduct.name}</h5>
          <p class="card-text"><i class="fa fa-inr"></i>&nbsp;${outdoorproduct.price}</p>
          <a href="product.html#outdoorplant" class="btn btn-primary mt-1"  onclick="addtocart(${outdoorproduct.id})">Add to cart</a>
          <a href="payment.html" class="btn btn-primary mt-1">Buy Now</a>
        </div>
      </div>
    </div>`
    }); 
}
showoutdoorProducts();
// product section for flower
function showflowerProducts(){
    flower.forEach((product) => {
        productFlower.innerHTML +=`
      <div class="col-6 col-md-4 d-flex justify-content-center">
      <div class="card mx-auto" style="width: 15rem">
        <img src="${product.imgsrc}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text"><i class="fa fa-inr"></i>&nbsp;${product.price}</p>
          <a href="product.html#flower" class="btn btn-primary mt-1"  onclick="addtocart(${product.id})">Add to cart</a>
          <a href="payment.html" class="btn btn-primary mt-1">Buy Now</a>
        </div>
      </div>
    </div>`
    }); 
}
showflowerProducts();
// product section for outdoorplant
function showseasonalProducts(){
    seasonalflower.forEach((product) => {
        productSeasonalflower.innerHTML +=`
      <div class="col-6 col-md-4 d-flex justify-content-center">
      <div class="card mx-auto" style="width: 15rem">
        <img src="${product.imgsrc}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text"><i class="fa fa-inr"></i>&nbsp;${product.price}</p>
          <a  class="btn btn-primary mt-1"  onclick="addtocart(${product.id})"
          href="product.html#seasonalflower">Add to cart</a>
          <a  class="btn btn-primary mt-1" href="payment.html">Buy Now</a>
        </div>
      </div>
    </div>`
    }); 
}
showseasonalProducts();
// cart array

let carts= JSON.parse(localStorage.getItem("data"))||[];
updatecart();
// add to cart
 function addtocart(id)
 {

  //  check if product already in cart
     if(carts.some((item) => item.id===id))
     {
      changeNumberOfUnits('plus',id);
     }
     else if(products.some((item) => item.id===id)) 
     {
         const item = products.find((product) => product.id===id);
         carts.push
         ({
           ...item,
           numberofunits:1,
           
         });
        console.log(carts);
         
         updatecart();

       }
    else if(indoorplant.some((item) => item.id===id))
    {
        const item = indoorplant.find((product) => product.id===id);
        carts.push
        ({
          ...item,
          numberofunits:1,
          
        });
       console.log(carts);
        
        updatecart();
    } 
    else if(outdoorplant.some((item) => item.id===id))
    {
        const item = outdoorplant.find((product) => product.id===id);
        carts.push
        ({
          ...item,
          numberofunits:1,
          
        });
       console.log(carts);
        
        updatecart();
    }
    else if(flower.some((item) => item.id===id))
    {
        const item = flower.find((product) => product.id===id);
        carts.push
        ({
          ...item,
          numberofunits:1,
          
        });
       console.log(carts);
        
        updatecart();
    }
    else
    {
        const item = seasonalflower.find((product) => product.id===id);
        carts.push
        ({
          ...item,
          numberofunits:1,
          
        });
      
        
        updatecart();
    }  
       
      
 }

 
 
 //  update cart 
function updatecart(){
  renderCartItem();
  rendersubtotal();
  localStorage.setItem("data",JSON.stringify(carts));


};

// show carts item


function renderCartItem(){
  
  cartproductE1.innerHTML = "";

  carts.forEach((item)=>{
    cartproductE1.innerHTML +=`
    <div class="row justify-content-between">
         <div class="col-5 text-center">
            <img class="img-fluid" src="${item.imgsrc}" alt="${item.name}" style="width: 15rem;">
            <h6 class=" mt-2">${item.name}</h6>
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
            <small><i class="fa fa-inr"></i></small>${item.price}
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
            <h6  class=" row btn minus d-inline-block mx-3" onclick="changeNumberOfUnits('minus', ${item.id})"><i class="bi bi-dash-circle-fill"></i></h6>
            <h6 class=" row number  d-inline-block">${item.numberofunits}</h6>
            <h6 class=" row btn plus  d-inline-block mx-3 " onclick="changeNumberOfUnits('plus', ${item.id})"><i class="bi bi-plus-circle-fill"></i></h6> 
                     
        </div>
        <div class="col-12 d-flex justify-content-center align-items-center">
        <button class="btn btn-primary mb-4 text-center" onclick="removecartitem(${item.id})">Remove</button>
     </div>
     </div>
    `;
  });
 
}

// rendrsubtotal function
 function rendersubtotal(){
     let totalprice =0, totalitem=0;
    carts.forEach((item)=> {
        totalprice += item.price*item.numberofunits;
        totalitem += item.numberofunits;
        });
    totalitemE1.innerHTML =`Subtotal (${totalitem} items)`;
    totalpriceE1.innerHTML =`<i class="fa fa-inr"></i>&nbsp ${ totalprice.toFixed(2)}`;
    numcart();
  
 }

//change no of units 
  function changeNumberOfUnits(action,id){
    carts = carts.map((item)=>{
      let oldnumberofunits = item.numberofunits
      if(item.id===id)
      {
        if(action==='minus' && oldnumberofunits > 1)
        {
          oldnumberofunits--;
        
        }
        else if(action ==='plus' && oldnumberofunits < item.instock)
        {
          oldnumberofunits++;
        }
      };
        return{
          ...item,
          numberofunits:oldnumberofunits,
        };
   
    });
    updatecart();
}


// remove itwem from cart
function removecartitem(id){
carts = carts.filter((item)=>item.id !==id);
updatecart();
}










  
 

