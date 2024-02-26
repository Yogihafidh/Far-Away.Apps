import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems;

  if (sort === "input") {
    sortedItems = items;
  } else if (sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sort === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.key}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Short by input order</option>
          <option value="description">Short by description</option>
          <option value="packed">Short by packed status</option>
        </select>
        <button onClick={onClearItem}>Clear List</button>
      </div>
    </div>
  );
}
