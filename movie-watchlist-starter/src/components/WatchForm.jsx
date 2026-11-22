import { useState } from "react";
export default function WatchForm({ onAdd }) {
  // TASK 2: make the input controlled. Keep its text in state (useState("")).
  const [text, setText] = useState("");

  function handleSubmit(e) {
  e.preventDefault();
  if (text.trim() === "") return;
    // TODO: stop the page reload, ignore empty text, call onAdd(text), clear the box
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a movie to watch"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
