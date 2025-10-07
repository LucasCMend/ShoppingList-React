import { X, ShoppingCart } from "lucide-react";
import { useState } from "react";

function Cart({ scart, removeCartItem }) {
  const [totalValue, setTotalValue] = useState(0)

  function calculateTotal(scart = []) {
    return scart.reduce((total, item) => total += item.value, 0)
  }

  return (
    <div className="bg-zinc-100 rounded-md m-10 w-2/5">
      <div className="flex space-x-3 p-3">
        <h3 className="text-purple-600">
          <ShoppingCart></ShoppingCart>
        </h3>
        <h3 className="font-medium text-xl">Carrinho</h3>
      </div>
      <div>
        <ul>
          {scart.map((cartItem) => (
            <div className="flex  p-5 rounded-md" key={cartItem.id}>
              <li
                className="flex-col  bg-zinc-200  p-3 w-full "
                key={cartItem.id}
              >
                <p className="text-xl font-medium">{cartItem.itemName}</p>
                <p className="text-3xl text-purple-600 font-medium">
                  R$ {cartItem.value}
                </p>
              </li>
              <div className=" bg-zinc-200 text-right p-6">
                <button
                  onClick={() => removeCartItem(cartItem.id)}
                  className="flex bg-red-600 text-zinc-100 rounded-md p-3 gap-3 h-18"
                >
                  <X size={20}></X> Remover
                </button>
              </div>
            </div>
            
          ))}
        </ul>
      </div>
      <div className="flex-col p-3">
        <h3 className="text-center font-medium text-xl p-2">Valor Total:</h3>
        <h3 className="text-center font-medium text-3xl text-purple-600 p-3 bg-zinc-200 ">{calculateTotal(scart)} R$</h3>
      </div>
    </div>
  );
}

export default Cart;
