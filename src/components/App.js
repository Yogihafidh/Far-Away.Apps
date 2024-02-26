import { useState } from "react";
import "../index.css";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Camera", quantity: 10, packed: false },
// ];

function App() {
  // Lifting up state
  const [items, setItems] = useState([]);

  // Add Item
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Delete items
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Update item
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Clear Item
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  // Pass State with props
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
