import { Package, ShoppingCart } from "lucide-react";

function Items(props) {
  return (
    <div className="bg-zinc-100 space-y-2 rounded-md m-10 w-2/5">
      <div className="flex space-x-3 p-3">
        <h3 className="flex text-purple-600">
          <Package></Package>
        </h3>
        <h3 className="font-medium text-xl">Itens Disponíveis</h3>
      </div>
      <div>
        <ul className="">
          {props.items.map((item) => (
            <div className="flex  p-5 rounded-md" key={item.id}>
              <li className="flex-col  bg-zinc-200  p-3 w-full " key={item.id}>
                <p className="text-xl font-medium">{item.itemName}</p>
                <p className="text-3xl text-purple-600 font-medium">
                  R$ {item.value}
                </p>
              </li>
              <div className=" bg-zinc-200 text-right p-6">
                <button className="flex bg-emerald-500 text-zinc-100 rounded-md p-3 gap-3 h-18">
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

export default Items;
