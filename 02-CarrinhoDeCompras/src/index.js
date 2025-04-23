import * as cartService from "./services/cart.js";

import { createItem } from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Bem-vindo(a) ao carrinho de compras!😍");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);

await cartService.addItem(myWishList, item2);
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, item1.name);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);
