import { useState } from "react";
import WatchForm from "../components/WatchForm.jsx";
import WatchList from "../components/WatchList.jsx";

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);

  // TASK 2: the watchlist live HERE, in the parent, not inside WatchForm or WatchList.
  // Replace the next line with useState, then fill in the three functions.

  function addItem(text) {
    setWatchlist([...watchlist, { id: crypto.randomUUID(), text, watched: false }]);
    // TODO: add { id: crypto.randomUUID(), text, watched: false } WITHOUT mutating the array
  }

  function toggleItem(id) {
    setWatchlist(watchlist.map((item) => {
      if (item.id === id) {
        return { ...item, watched: !item.watched };
      }
      return item;
    }));
  }

  function deleteItem(id) {
    setWatchlist(watchlist.filter((item) => item.id !== id));
    // TODO: remove the item with this id (use filter)
  }

  // TASK 2: derived data. Compute it from watchlist. Do NOT store it in state.
  const toWatch = watchlist.filter((item) => !item.watched).length;

  return (
    <section className="panel">
      <h2>Watchlist ({toWatch} to watch)</h2>
      <WatchForm onAdd={addItem} />
      <WatchList watchlist={watchlist} onToggle={toggleItem} onDelete={deleteItem} />
    </section>
  );
}
