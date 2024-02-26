// Element controlled
import { useState } from "react";
export default function Form({ onAddItems }) {
  // 1. Mendeskripsikan state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Function submit handle
  function handleSubmit(e) {
    e.preventDefault();

    // Get Data from form
    if (description === "") return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // Add to item state base on creating objek
    onAddItems(newItem);

    // Set element view to default view
    setDescription("");
    setQuantity(1);
  }

  return (
    // Event pada form memggunakan onSubmit
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        // e.target selalu mengembalikan string jadi conversikan ke number dulu
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Membuat nilai banyak pada from menggunakan array */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          {
            /* Pada element selected kita perlu meng-setting value */
          }
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>

      <input
        type="text"
        placeholder="Item..."
        // 2. Menggunakan state tersebut sebagai nilai dari input field tersebut
        value={description}
        // 3. Mengkoneksikan state saat ini dengan nilai yang ingin kita ketik di input field menggunakan event change
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
