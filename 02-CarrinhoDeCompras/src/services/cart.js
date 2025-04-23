// Ações

// Adicionar um item ao carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// Excluir item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// Tirar um item do carrinho
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //   Se tiver mais de 1, diminui 1
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //   Se for o último, remove o item
  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// Mostrar carrinho
async function displayCart(userCart) {
  console.log("\n🫰Carrinho de compras:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${
        item.quantity
      }x | Subtotal ${item.subtotal().toFixed(2)}`
    );
  });
}

// Calcular o total do carrinho
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

  console.log(`\n💰Total do carrinho: R$ ${result.toFixed(2)}`);
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };
