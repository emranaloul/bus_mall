/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
const product = document.getElementById('items').value;
let quantity = document.getElementById('quantity').value;


// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    const option = document.createElement('option');
    items.appendChild(option);
    option.textContent = Product.allProducts[i].name;

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
 
  event.preventDefault();
 

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  document.getElementById('caltalog').reset();
  
//   quantity.reset(); 
       
  console.log(cart.item);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
    
     const cartrestore = JSON.parse(localStorage.getItem('cart'));
    let product = document.getElementById('items').value;
     let quantity = document.getElementById('quantity').value;
        // cart.addItem(name ,quantity);
        const SelectedItem = document.getElementById('cartContents')
        const pElement = document.createElement('p');
        cartContents.appendChild(pElement);

        
    pElement.textContent = `You have added ${product}, a quantity of ${quantity} to your cart.`;

    CartItemArray.push(quantity);
    
  
    
  // TODO: suss out the item picked from the select list
        // ("select").product("option:selected").remove();
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart

    cart.product = product;
    cart.quantity += quantity;
}

// TODO: Update the cart count in the header nav with the number of items in the Cart

function updateCounter() {
    
    var textEl = document.createElement('p');
    var countEl = document.getElementById('itemCount');
    textEl.removeChild(textEl.lastChild);
    let cartQuantity = 0;
    for (let i = 0; i < CartItemArray.length; i++) {
        

          cartQuantity += parseInt(CartItemArray[i]);
        }   
        
    textEl.textContent = ("# Items in Cart: " + cartQuantity );
    
    countEl.appendChild(textEl);  
    
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();