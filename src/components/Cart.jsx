import { DropletOff, ShoppingCart } from "lucide-react";

function Cart(props) {
  return (
    <div className="bg-zinc-100 rounded-md m-10 w-2/5">
      <div className="flex space-x-3">
        <h3 className="text-purple-600">
          <ShoppingCart></ShoppingCart>
        </h3>
        <h3 className="font-medium text-xl">Carrinho</h3>
      </div>
      <div>
        <ul>
          {props.scart.map((cartItem) => (
            <div className="bg-zinc-600" key={cartItem.id}>
              <li
                className="flex-col  bg-zinc-200  p-3 w-full "
                key={cartItem.id}
              >
                <p className="text-xl font-medium">{cartItem.itemName}</p>
                <p className="text-3xl text-purple-600 font-medium">
                  R$ {cartItem.value}
                </p>
              </li>
              <div className=" bg-zinc-200 text-right p-6 ">
                <button
                  onClick={() => props.addToCart(item.itemName, item.value)}
                  className=" bg-emerald-500 text-zinc-100 rounded-md p-3 gap-3 h-18"
                >
                  <ShoppingCart size={20}></ShoppingCart> Adicionar
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
