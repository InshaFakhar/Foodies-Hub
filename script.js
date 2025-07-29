function exploremenu()
{
    const menuSection= document.querySelector("#menu");
  menuSection.scrollIntoView({ behavior:"smooth"})
}
 document.addEventListener("DOMContentLoaded", function() {
  const cartButtons = document.querySelectorAll('.cart-btn');
  console.log("Cart Buttons Found:", cartButtons.length);

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert("Item added to cart!");
    });
  });
});


 //document.addEventListener("DOMContentLoaded", function () {
   // document.querySelector(".login-btn").addEventListener("click", function () {
     // alert("login feature coming soon!");
   // });
  //});

 
document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".or");

  orderButtons.forEach(button => {
    button.addEventListener("click", function () {
      console.log("Your order is placed successfully!");
      alert("Your order is placed successfully!");
    });
  });
});
