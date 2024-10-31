export let cart = JSON.parse(localStorage.getItem('cart')) // this will get the cart from local storage

if(!cart) {
    cart = [{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
  },{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  }];
}

function saveToStroage() {
   localStorage.setItem('cart', JSON.stringify(cart)) // Save the cart to local storage
}

export function addToCart(productId) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }
  }
saveToStroage(); // Call the function to save the cart to local storage
  export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem)=> {
        if (cartItem.productId !== productId){
           newCart.push(cartItem);
        }
    });

    cart = newCart; // Update the cart with the new cart, its outside the scope of the forEach loop because we want to update the cart after the loop is done

    saveToStroage(); // Save the updated cart to local storage
  }