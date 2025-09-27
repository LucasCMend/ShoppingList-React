import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
      itemName: "Maçã",
      id:1,
      value: 4.5,
      addedCart: false,
    },
    {
      itemName: "Sapatos",
      id: 2,
      value: 90,
      addedCart:false
    }
  ])

  function onAddItemSubmit(itemName, value) {

    const newItem = {
      itemName,
      id: crypto.randomUUID(),
      value,
      addedCart: false
    }

    setItems([...items, newItem])
  }

  return (
    <div className="h-screen w-screen bg-zinc-200 flex flex-col items-center">
      <div className="text-center p-6 font-sans font-medium">
        <h1 className="text-purple-600 p-2 text-3xl">Lista de Compras</h1>
        <h2 className="text-zinc-600">
          Aqui, você pode, ver sua lista e adicionar os itens desejados no
          carrinho!
        </h2>
      </div>
      <AddItem onAddItemSubmit={onAddItemSubmit}></AddItem>
      <Items items = {items}></Items>
    </div>
  );
}

export default App;
