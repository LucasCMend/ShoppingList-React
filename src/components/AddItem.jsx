import { Plus } from "lucide-react";
import { useState } from "react";

function AddItem(props) {
  const [itemName, setItemName] = useState("");
  const [itemValue, setItemValue] = useState("");

  return (
    <div className="bg-zinc-100 space-y-8 rounded-md m-10 w-2/5 h-44 p-6">
      <div className="flex items-center space-x-3">
        <h3 className="text-xl text-purple-600">
          <Plus size={24} />
        </h3>
        <h3 className="text-xl font-medium">Adicionar Produto</h3>
      </div>

      <div className="space-x-5 flex">
        <input
          className="rounded-md bg-zinc-200 p-2 placeholder-zinc-600 text-zinc-600 w-72"
          type="text"
          name=""
          id=""
          placeholder="Nome do produto"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          className="rounded-md bg-zinc-200 p-2 placeholder-zinc-600 text-zinc-600 w-24"
          type="text"
          name=""
          id=""
          placeholder="R$ 0,00"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
        />
        <button
          onClick={() => {
            if (itemName != "" && itemValue != "") {
              props.onAddItemSubmit(itemName, itemValue);
              setItemName("");
              setItemValue("");
            } else {
              return alert("Digite o nome e/ou o valor corretamente!");
            }
          }}
          className="bg-purple-600 text-zinc-200 rounded-md flex items-center p-2 w-36 gap-3"
        >
          <Plus size={20}></Plus>Adicionar
        </button>
      </div>
    </div>
  );
}

export default AddItem;
