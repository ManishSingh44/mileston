
function doubleCartItem(cart){
    for(let i=0;i<cart.length;i++){
        cart[i] *= 2;
    }
}
let cart =[5,6,4,3,2,7,8];
    doubleCartItem(cart);
    console.log(cart);
    