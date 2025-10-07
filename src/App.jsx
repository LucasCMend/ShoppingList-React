import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Items from "./components/Items";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState([
    {
      itemName: "Maçã",
      id: 1,
      value: 4.5,
    },
    {
      itemName: "Sapatos",
      id: 2,
      value: 90,
    },
  ]);

  const [scart, setScart] = useState([]);

  function onAddItemSubmit(itemName, value) {
    const newItem = {
      itemName,
      id: crypto.randomUUID(),
      value,
    };

    setItems([...items, newItem]);
  }

  function addToCart(itemName, value) {
    const newCartItem = {
      itemName,
      id: crypto.randomUUID(),
      value,
    };

    setScart([...scart, newCartItem]);

    const newItemsList = items.filter(item => item.itemName !== itemName);

    setItems(newItemsList);
  }

  return (
    <div className="h-full w-screen bg-zinc-200 flex flex-col items-center">
      <div className="text-center p-6 font-sans font-medium">
        <h1 className="text-purple-600 p-2 text-3xl">Lista de Compras</h1>
        <h2 className="text-zinc-600">
          Aqui, você pode, ver sua lista e adicionar os itens desejados no
          carrinho!
        </h2>
      </div>
      <AddItem onAddItemSubmit={onAddItemSubmit}></AddItem>
      <Items items={items} addToCart={addToCart}></Items>
      <Cart scart={scart}></Cart>
    </div>
  );
}

export default App;
